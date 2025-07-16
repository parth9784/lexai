import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { Variants } from "framer-motion";

const faqCategories = [
  {
    category: "About LexAi",
    questions: [
      {
        question: "What is LexAi?",
        answer:
          "LexAi is an AI-powered legal assistant designed to help users analyze legal documents, translate regional languages, and generate research summaries efficiently.",
      },
      {
        question: "Who can use LexAi?",
        answer:
          "LexAi is built for law students, professionals, researchers, and anyone dealing with legal documentation and case research.",
      },
      {
        question: "Is LexAi a replacement for a lawyer?",
        answer:
          "No. LexAi is a supportive tool, not a substitute for qualified legal advice or representation.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        question: "What types of legal documents can LexAi analyze?",
        answer:
          "LexAi can analyze FIRs, judgments, case laws, charge sheets, and OCR-based scanned legal documents.",
      },
      {
        question: "Can LexAi translate documents?",
        answer:
          "Yes, LexAi supports multilingual translations between English and several Indian regional languages, both ways.",
      },
      {
        question: "Does LexAi summarize judgments?",
        answer:
          "Absolutely. LexAi uses NLP to provide concise, understandable summaries of court judgments and legal texts.",
      },
    ],
  },
  {
    category: "Pricing & Access",
    questions: [
      {
        question: "Is LexAi free to use?",
        answer:
          "Currently, LexAi is in beta and offers free access. Future updates may include paid tiers with advanced capabilities.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "Yes, creating an account helps us securely manage your usage and personalize your experience.",
      },
      {
        question: "Will my data be stored?",
        answer:
          "No. LexAi does not store any documents or chat history. All processing is ephemeral and secure.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "How can I report a bug or issue?",
        answer:
          "You can report issues via our in-app feedback form or email support@lexai.in.",
      },
      {
        question: "Does LexAi work on mobile?",
        answer:
          "Yes, LexAi is fully responsive and optimized for mobile, tablet, and desktop experiences.",
      },
      {
        question: "What are the supported file formats?",
        answer:
          "LexAi supports PDF, DOCX, and image files for OCR processing (PNG/JPG).",
      },
    ],
  },
];

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
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<{ category: string; index: number } | null>(null);

  const toggleFAQ = (category: string, index: number) => {
    if (activeIndex?.category === category && activeIndex?.index === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex({ category, index });
    }
  };

  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 manrope-500">
      <div className="max-w-screen-lg mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Find answers to common queries about how LexAi works and what it can do for you.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto">
        {faqCategories.map((cat) => (
          <div key={cat.category} className="mb-16">
            <h3 className="text-2xl sm:text-3xl text-blue-900 font-semibold mb-6 text-center">
              {cat.category}
            </h3>

            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {cat.questions.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-blue-100 rounded-xl shadow-sm overflow-hidden cursor-pointer"
                >
                  <button
                    onClick={() => toggleFAQ(cat.category, index)}
                    className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left text-[#b38b3c] font-medium text-base sm:text-lg focus:outline-none hover:bg-blue-50 transition"
                  >
                    {faq.question}
                    <FiChevronDown
                      className={`text-xl transition-transform duration-300 ${
                        activeIndex?.category === cat.category && activeIndex?.index === index
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex?.category === cat.category && activeIndex?.index === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeOut }}
                      >
                        <div className="px-6 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
