// lib/nodemailer.ts
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'freshertodayhost@gmail.com',
    pass: process.env.NODEMAILER_APP_PASSWORD, 
  },
})
