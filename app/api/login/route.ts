import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '@/app/lib/firebaseAdmin'
import { USER_COLLECTION } from '@/app/constant/db-collections'

// Secret for JWT (make sure to keep this secure)
const JWT_SECRET = process.env.JWT_SECRET || 'codesanjay'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const userRef = db.collection(USER_COLLECTION).doc(email)
    const userDoc = await userRef.get()

    if (!userDoc.exists) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const userData = userDoc.data()
    const isPasswordValid = await bcrypt.compare(password, userData?.password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' })

    // Set token in HttpOnly cookie
    const response = NextResponse.json(
      { message: 'Login successful', user: { email } },
      { status: 200 }
    )

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
