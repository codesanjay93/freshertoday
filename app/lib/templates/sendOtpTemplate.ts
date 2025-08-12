// lib/templates/sendOtpTemplate.ts

export function generateOtpEmail(otp: string) {
  return {
    subject: 'Your OTP for Email Verification – Freshertoday',
    html: `
      <div style="background-color: #f4f4f4; padding: 40px 20px; font-family: 'Segoe UI', sans-serif;">
        <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 30px;">
          
          <div style="text-align: center;">
            <img src="https://freshertoday.in/logo.png" alt="Freshertoday Logo" style="height: 40px; margin-bottom: 20px;" />
            <h2 style="font-size: 22px; color: #222; margin-bottom: 10px;">One-Time Password (OTP)</h2>
            <p style="font-size: 14px; color: #555;">Use the OTP below to verify your email and complete your sign-up.</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <div style="display: inline-block; background-color: #f1f1f1; padding: 16px 32px; border-radius: 8px;">
              <span style="font-size: 28px; letter-spacing: 3px; color: #111; font-weight: bold;">${otp}</span>
            </div>
          </div>

          <p style="font-size: 14px; color: #666; text-align: center;">This OTP is valid for <strong>10 minutes</strong>. Please don’t share it with anyone.</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />

          <div style="font-size: 12px; color: #888; text-align: center;">
            Need help? Reach out to <a href="mailto:support@freshertoday.in" style="color: #555;">support@freshertoday.in</a><br/>
            © ${new Date().getFullYear()} Freshertoday. All rights reserved.
          </div>
        </div>
      </div>
    `,
  };
}
