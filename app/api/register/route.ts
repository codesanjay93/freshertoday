import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '@/app/lib/firebaseAdmin'
import { USER_COLLECTION, OTP_SESSIONS_COLLECTION } from '@/app/constant/db-collections'

// Replace this with your real JWT secret (store in env)
const JWT_SECRET = process.env.JWT_SECRET || "codesanjay"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Step 1: Check OTP verification
    const otpDocRef = db.collection(OTP_SESSIONS_COLLECTION).doc(email)
    const otpSnap = await otpDocRef.get()

    if (!otpSnap.exists || !otpSnap.data()?.verified) {
      return NextResponse.json({ error: 'Please verify OTP before registering.' }, { status: 403 })
    }

    // Step 2: Check if user already exists
    const userRef = db.collection(USER_COLLECTION).doc(email)
    const userDoc = await userRef.get()

    if (userDoc.exists) {
      return NextResponse.json({ error: 'User already registered.' }, { status: 409 })
    }

    // Step 3: Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Step 4: Save user
    await userRef.set({
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    })

    // Step 5: Create JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' })

    // Step 6: Set cookie and return response
    const response = NextResponse.json(
      { message: 'User registered successfully', token },
      { status: 201 }
    )

    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax',
    })

    return response
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
