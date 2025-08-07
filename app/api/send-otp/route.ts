import { sendOtpEmail } from '@/app/lib/sendOtp/sendOtp'
import { db } from '@/app/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'
import { OTP_SESSIONS_COLLECTION } from '@/app/constant/db-collections'

const OTP_EXPIRY_MINUTES = 30

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const otpRef = db.collection(OTP_SESSIONS_COLLECTION).doc(email)
    const doc = await otpRef.get()

    const now = new Date()
    const expiryTime = new Date(now.getTime() - OTP_EXPIRY_MINUTES * 60 * 1000)

    if (doc.exists) {
      const data = doc.data()

      // If already verified
      if (data?.verified) {
        return NextResponse.json({ error: 'Email already verified' }, { status: 400 })
      }

      // If OTP exists and is still valid
      if (data?.createdAt && new Date(data.createdAt) > expiryTime) {
        return NextResponse.json({
          message: 'OTP already sent. Please verify the existing OTP.',
        }, { status: 200 })
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    // Send OTP email
    const result = await sendOtpEmail(email, otp)

    if (!result.success) {
      return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 })
    }

    // Store OTP in Firestore
    await otpRef.set({
      otp,
      verified: false,
      createdAt: now.toISOString(),
    })

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending OTP:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
