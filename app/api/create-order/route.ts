// // app/api/create-order/route.ts
// import Razorpay from 'razorpay';
// import { NextResponse } from 'next/server';

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST() {
//   try {
//     const order = await razorpay.orders.create({
//       amount: 100, // ₹99 in paise
//       currency: 'INR',
//       receipt: `order_rcpt_${Date.now()}`,
//     });

//     return NextResponse.json({ order });
//   } catch (error) {
//     console.error('Razorpay Error:', error);
//     return NextResponse.json(
//       { error: 'Order creation failed' },
//       { status: 500 }
//     );
//   }
// }

// template for creating an order with Razorpay in Next.js API route
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ message: 'Order created successfully' });
  } catch (error) {
    console.error('Razorpay Error:', error);
    return NextResponse.json(
      { error: 'Order creation failed' },
      { status: 500 }
    );
  }
}
