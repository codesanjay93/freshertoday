'use client';

import { useState } from 'react';

export default function RazorpayButton() {
  const [loading, setLoading] = useState(false);

  // ✅ Dynamically load Razorpay script before usage
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') return resolve(false);

      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Failed to load Razorpay SDK. Please check your connection.');
      setLoading(false);
      return;
    }

    const res = await fetch('/api/create-order', {
      method: 'POST',
    });

    const data = await res.json();
    const { id, amount, currency } = data.order;

    const options: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount,
      currency,
      name: 'Freshertoday',
      description: 'Internship Certificate Payment',
      order_id: id,
      handler: function (response: any) {
        alert('✅ Payment successful!');
        console.log('Payment Response:', response);
        // TODO: Add Firestore update or email trigger here
      },
      prefill: {
        name: 'Sanjay Achari',
        email: 'sanjay@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#005250',
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-teal-700 text-white px-6 py-2 rounded-lg"
    >
      {loading ? 'Processing...' : 'Pay ₹1'}
    </button>
  );
}
