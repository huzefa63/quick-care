// function page() {
//     return (
//         <div>
//             <h1>pricing</h1>
//         </div>
//     )
// }

// export default page
"use client";
import { useState } from "react";
import Pricing from "@/app/_components/Pricing";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Limited Appointments", "Basic Support", "Standard Booking"],
  },
  {
    name: "Standard",
    price: "$9.99/month",
    features: [
      "Unlimited Appointments",
      "Priority Support",
      "Advanced Booking",
    ],
  },
  {
    name: "Premium",
    price: "$19.99/month",
    features: ["All Standard Features", "24/7 Support", "Exclusive Doctors"],
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="h-screen overflow-auto pb-15">
      <Pricing />
    </div>
  );
}
