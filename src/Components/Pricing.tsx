import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";


export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "business" | "enterprise" | null>("business");

  const pricing = {
    monthly: { basic: 22, business: 40, enterprise: 64 },
    annually: { basic: 240, business: 480, enterprise: 768 },
  };

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
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
      name: "Business Plan",
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
      name: "Enterprise Plan",
      features: [
        { label: "200+ integrations", included: true },
        { label: "Advanced reporting and analytics", included: true },
        { label: "Unlimited individual users", included: true },
        { label: "Unlimited individual data", included: true },
        { label: "Personalized + priority service", included: true },
      ],
    },
  ];

  // Local billing state per plan
  const [billingCycle, setBillingCycle] = useState<{
    [key: string]: "monthly" | "annually";
  }>({
    basic: "monthly",
    business: "monthly",
    enterprise: "monthly",
  });

  const handleBillingChange = (planId: string, value: "monthly" | "annually") => {
    setBillingCycle((prev) => ({ ...prev, [planId]: value }));
  };

  return (
    <>
    {/* <Navbar /> */}
    <div className="bg-[#f5f7fa] min-h-screen py-16 px-4 lg:px-20 text-gray-800 manrope-500">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-5xl font-semibold text-center mb-4 text-blue-900"
      >
        Simple & <span className="italic font-light text-[#C18D21]">transparent</span> pricing
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-lg text-gray-500 mb-12"
      >
        for all business sizes
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => {
          const isSelected = selectedPlan === plan.id;
          const planBilling = billingCycle[plan.id];
          const price = pricing[planBilling][plan.id as keyof typeof pricing.monthly];

          return (
            <motion.div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id as typeof selectedPlan)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 flex flex-col border shadow-md hover:shadow-xl ${
                isSelected ? "border-[#C18D21] shadow-xl -translate-y-2" : "border-transparent"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 mt-[-14px] mr-[-14px] bg-[#C18D21] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Most popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>

              {/* Price */}
              <p className="text-3xl font-bold mb-2">
                ${price}{" "}
                <span className="text-base font-normal">/month</span>
              </p>

              {/* Billing Toggle inside card */}
              <div className="flex justify-center gap-2 mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBillingChange(plan.id, "monthly");
                  }}
                  className={`px-3 py-1 text-xs rounded-full border transition ${
                    planBilling === "monthly"
                      ? "bg-[#C18D21] text-white"
                      : "bg-white text-[#C18D21] border-[#C18D21]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBillingChange(plan.id, "annually");
                  }}
                  className={`px-3 py-1 text-xs rounded-full border transition ${
                    planBilling === "annually"
                      ? "bg-[#C18D21] text-white"
                      : "bg-white text-[#C18D21] border-[#C18D21]"
                  }`}
                >
                  Annual
                </button>
              </div>

              {/* CTA */}
              <button
                className={`mb-6 px-4 py-2 font-medium rounded-md transition cursor-pointer ${
                  isSelected
                    ? "bg-[#C18D21] text-white"
                    : "bg-[#f7f0e3] text-[#C18D21] hover:bg-[#ebdfc4]"
                }`}
              >
                Get Started
              </button>

              {/* Feature list */}
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
            </motion.div>
          );
        })}
      </div>
    </div>
    </>
  );
}

