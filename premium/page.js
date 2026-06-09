"use client";

import { useEffect, useState } from "react";

export default function PremiumPage() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect (() => {
    const premium = localStorage.getItem("premium");
    if (premium === "true") {
      setPaymentCompleted(true);
    }
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      cardholderName,
      cardNumber,
      expiryDate,
      cvc,
      email,
    });
    localStorage.setItem("premium", "true");
    setPaymentCompleted(true);
  }
  if (paymentCompleted) {
    return <h1>Payment Complete</h1>;
  }
  return (
    <main className="mx-auto w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold">Go Premium</h1>
      <p className="text-lg text-muted-foreground ">Mock payment form</p>

      <form
        className="space-y-4 flex flex-col gap-1 py-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Cardholder name"
          value={cardholderName}
          onChange={(event) => setCardholderName(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <input
          type="text"
          placeholder="Card number"
          value={cardNumber}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          onChange={(event) => setCardNumber(event.target.value)}
        />

        <input
          type="text"
          placeholder="Expiry date"
          value={expiryDate}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          onChange={(event) => setExpiryDate(event.target.value)}
        />

        <input
          type="text"
          placeholder="CVC"
          value={cvc}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          onChange={(event) => setCvc(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
          type="submit"
        >
          Pay
        </button>
      </form>
    </main>
  );
}
