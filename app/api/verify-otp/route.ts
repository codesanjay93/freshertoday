import { OTP_SESSIONS_COLLECTION } from '@/app/constant/db-collections'
import { db } from '@/app/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'

const OTP_EXPIRY_MINUTES = 30

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 })
    }

    const docRef = db.collection(OTP_SESSIONS_COLLECTION).doc(email)
    const docSnap = await docRef.get()

    if (!docSnap.exists) {
      return NextResponse.json({ error: 'No OTP found for this email' }, { status: 404 })
    }

    const { otp: storedOtp, createdAt, verified } = docSnap.data() as {
      otp: string
      createdAt: string
      verified?: boolean
    }

    // ✅ If already verified
    if (verified) {
      return NextResponse.json({ message: 'Email already verified' , verified : true }, { status: 200 })
    }

    const createdTime = new Date(createdAt).getTime()
    const now = Date.now()

    const minutesElapsed = (now - createdTime) / (1000 * 60)

    if (storedOtp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 })
    }

    if (minutesElapsed > OTP_EXPIRY_MINUTES) {
      return NextResponse.json({ error: 'OTP expired' }, { status: 410 })
    }

    // ✅ OTP is valid — mark as verified
    await docRef.update({
      verified: true,
    })

    return NextResponse.json({ message: 'OTP verified successfully' , verified : true }, { status: 200 })
  } catch (err) {
    console.error('OTP verify error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
