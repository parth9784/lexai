import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { Variants } from "framer-motion";

const faqs = [
    {
        question: "Is LexAi free to use?",
        answer:
            "LexAi offers a free beta plan. Advanced features like deep legal research or document exports may be limited or require subscription in future releases.",
    },
    {
        question: "What kind of legal documents can I analyze?",
        answer:
            "You can analyze FIRs, case laws, court judgments, and scanned legal texts using our OCR module.",
    },
    {
        question: "Does LexAi support regional languages?",
        answer:
            "Yes! Our translation engine can understand and convert documents across multiple Indian languages to English and vice versa.",
    },
    {
        question: "Is my data safe and private?",
        answer:
            "Absolutely. LexAi does not store your chats or documents. All data is processed temporarily and securely.",
    },
    {
        question: "Can I download the AI outputs?",
        answer:
            "Yes, every conversation or result can be exported as a PDF or DOC file instantly from the platform.",
    },
];

// ✅ Use the correct easing function
const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOut }, // ✅ corrected
    },
};

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white text-gray-800 py-20 px-6 manrope-500">
            <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-4xl md:text-5xl text-blue-700 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-md md:text-lg">
                    Find answers to common queries about how LexAi works and what it can
                    do for you.
                </p>
            </div>

            <motion.div
                className="max-w-3xl mx-auto space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="border border-blue-100 rounded-xl shadow-sm overflow-hidden cursor-pointer"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left text-blue-800 font-medium text-lg focus:outline-none hover:bg-blue-50 transition"
                        >
                            {faq.question}
                            <FiChevronDown
                                className={`text-xl transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: easeOut }}
                                >
                                    <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
