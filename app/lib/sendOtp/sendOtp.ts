// lib/sendOtp.ts

import { transporter } from "../nodemailer/nodemailer"
import { generateOtpEmail } from "../templates/sendOtpTemplate"

export async function sendOtpEmail(toEmail: string, otp: string) {
  const { subject, html } = generateOtpEmail(otp)

  const mailOptions = {
    from: '"Freshertoday" <codesanjay93@gmail.com>',
    to: toEmail,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('OTP email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending OTP email:', error)
    return { success: false, error }
  }
}
