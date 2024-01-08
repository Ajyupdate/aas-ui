// Your Next.js component for initiating payment
"use client";

import PaymentForm from "@/modules/payment/PaymentForm";
import { useSearchParams } from "next/navigation";

export default function PayForm() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  return <PaymentForm amount={amount} />;
}
