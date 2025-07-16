import { useState } from "react";
import { Check, Minus } from "lucide-react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "business" | "enterprise" | null>("business");

  const pricing = {
    monthly: { basic: 22, business: 40, enterprise: 64 },
    annually: { basic: 18, business: 34, enterprise: 56 },
  };

  const plans = [
    {
      id: "basic",
      name: "Basic plan",
      price: pricing[billing].basic,
      features: [
        { label: "200+ integrations", included: false },
        { label: "Advanced reporting and analytics", included: false },
        { label: "Up to 10 individual users", included: true },
        { label: "20GB individual data each user", included: true },
        { label: "Basic chat and email support", included: true },
      ],
    },
    {
      id: "business",
      name: "Business plan",
      price: pricing[billing].business,
      popular: true,
      features: [
        { label: "200+ integrations", included: true },
        { label: "Advanced reporting and analytics", included: true },
        { label: "Up to 20 individual users", included: true },
        { label: "40GB individual data each user", included: true },
        { label: "Priority chat and email support", included: true },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise plan",
      price: pricing[billing].enterprise,
      features: [
        { label: "200+ integrations", included: true },
        { label: "Advanced reporting and analytics", included: true },
        { label: "Unlimited individual users", included: true },
        { label: "Unlimited individual data", included: true },
        { label: "Personalized + priority service", included: true },
      ],
    },
  ];

  return (
    <div className="bg-[#f5f7fa] min-h-screen py-16 px-4 lg:px-20 text-gray-800 manrope-500">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-4 text-blue-900">
        Simple & <span className="italic font-light text-[#C18D21] ">transparent</span> pricing
      </h2>
      <p className="text-center text-lg text-gray-500 mb-12">for all business sizes</p>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-10 gap-2">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-5 py-2 text-sm rounded-full border transition cursor-pointer ${
            billing === "monthly"
              ? "bg-[#C18D21] text-white"
              : "bg-white text-[#C18D21] border-[#C18D21]"
          }`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => setBilling("annually")}
          className={`px-5 py-2 text-sm rounded-full border transition cursor-pointer ${
            billing === "annually"
              ? "bg-[#C18D21] text-white"
              : "bg-white text-[#C18D21] border-[#C18D21]"
          }`}
        >
          Annual billing
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id as typeof selectedPlan)}
            className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col border shadow-md ${
              selectedPlan === plan.id
                ? "border-[#C18D21] shadow-xl -translate-y-2"
                : "border-transparent"
            }`}
          >
            {/* Always visible badge for popular plan */}
            {plan.popular && (
              <div className="absolute top-0 right-0 mt-[-14px] mr-[-14px] bg-[#C18D21] text-white text-xs px-3 py-1 rounded-full shadow-md">
                Most popular
              </div>
            )}

            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold mb-2">
              ${plan.price} <span className="text-base font-normal">/month</span>
            </p>

            <button
              className={`mt-2 mb-6 px-4 py-2 font-medium rounded-md transition cursor-pointer ${
                selectedPlan === plan.id
                  ? "bg-[#C18D21] text-white"
                  : "bg-[#f7f0e3] text-[#C18D21]"
              }`}
            >
              Get started
            </button>

            {/* Features */}
            <div className="text-sm space-y-3 text-gray-700">
              {plan.features.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  {f.included ? (
                    <Check size={16} className="text-[#C18D21]" />
                  ) : (
                    <Minus size={16} className="text-gray-400" />
                  )}
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
