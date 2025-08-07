/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState, useEffect, useRef } from 'react'
import CryptoJS from 'crypto-js'
import { Mail, RefreshCw } from 'lucide-react'
// import axios from 'axios'
// import { API } from '../constant/constant'
// import { useRouter } from 'next/navigation'

export default function OtpVerification() {
  // const router = useRouter()
  const [userData, setUserData] = useState<{ email: string; password: string } | null>(null)
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(''))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    const encrypted = localStorage.getItem('register_data')
    if (encrypted) {
      try {
        const bytes = CryptoJS.AES.decrypt(encrypted, 'codesanjay')
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        setUserData(decrypted)
      } catch {
        setUserData(null)
      }
    }
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return
    const updated = [...otpDigits]
    updated[index] = value
    setOtpDigits(updated)
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otpDigits[index]) {
        const updated = [...otpDigits]
        updated[index] = ''
        setOtpDigits(updated)
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
        const updated = [...otpDigits]
        updated[index - 1] = ''
        setOtpDigits(updated)
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData('text').slice(0, 6)
    if (!/^\d{6}$/.test(paste)) return
    const pastedDigits = paste.split('')
    setOtpDigits(pastedDigits)
    pastedDigits.forEach((digit, i) => {
      if (inputRefs.current[i]) inputRefs.current[i]!.value = digit
    })
    inputRefs.current[5]?.focus()
  }


const handleVerify = async () => {
  const otp = otpDigits.join('')

  if (otp.length !== 6) {
    setError('Please enter a valid 6-digit code.')
    return
  }

  setIsVerifying(true)
  setError('') // Clear previous error

  try {
    // const response = await axios.post(
    //   `${API}/verify-otp`,
    //   {
    //     email: 'codesanjay93@gmail.com',
    //     otp,
    //   },
    //   { withCredentials: true }
    // )
    // console.log('response:', response)
    // if (response.status === 200) {
    //   router.push('/fresher/home')
    // } else {
    //   setError(response.data?.message || 'Invalid OTP.')
    // }
  } catch (err : any) {
    console.error('Verification error:', err)
    setError(err.response?.data?.message || 'Something went wrong.')
  } finally {
    setIsVerifying(false)
  }
}

  const handleResend = () => {
    setTimeLeft(60)
    setCanResend(false)
    setOtpDigits(Array(6).fill(''))
    inputRefs.current[0]?.focus()
    setError('')
  }

  // 💡 Show skeleton while loading
  if (!userData?.email) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="text-center mb-6 space-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto" />
            <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mt-2" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-10 h-12 bg-gray-200 rounded-md" />
              ))}
            </div>
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="text-center mt-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ✅ Actual UI once email is decrypted
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-6 space-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold">Verify your phone</h2>
          <p className="text-gray-600">
            We have sent a 6-digit code to <br />
            <span className="font-medium text-gray-900">{userData.email}</span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            {otpDigits.map((digit, i) => (
              <input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                ref={(el : any ) => (inputRefs.current[i] = el)}
                className="w-10 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ))}
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleVerify}
            disabled={otpDigits.join('').length !== 6 || isVerifying}
            className={`w-full py-2 rounded-md text-white font-medium flex items-center justify-center ${
              isVerifying ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
            }`}
          >
            {isVerifying ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              'Verify Code'
            )}
          </button>

          <div className="text-center mt-4 space-y-2">
            <p className="text-sm text-gray-600">Didn’t receive the code?</p>
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-blue-600 text-sm underline"
              >
                Resend code
              </button>
            ) : (
              <p className="text-sm text-gray-500">Resend code in {timeLeft}s</p>
            )}
            <button className="block mx-auto text-sm text-gray-600 underline mt-2">
              Change email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
