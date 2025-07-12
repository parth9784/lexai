import { motion } from "framer-motion";
import { FaBrain, FaDownload, FaSearch, FaLanguage, FaBalanceScale } from "react-icons/fa";
import HeroSection from "./HeroSection";

const features = [
    {
        icon: <FaBrain className="text-blue-600 text-3xl" />,
        title: "Context-Aware Suggestions",
        description:
            "Get intelligent legal suggestions from extensive law databases like Mumbai High Court and more.",
    },
    {
        icon: <FaDownload className="text-blue-600 text-3xl" />,
        title: "Real-time Brave Access",
        description:
            "Access latest info from the web anytime. All interactions can be downloaded for future reference.",
    },
    {
        icon: <FaSearch className="text-blue-600 text-3xl" />,
        title: "Deep Legal Research",
        description:
            "Research complex, narrow legal topics and generate structured PDFs, documents, and case briefs.",
    },
    {
        icon: <FaLanguage className="text-blue-600 text-3xl" />,
        title: "OCR & Translate",
        description:
            "Recover text from damaged FIRs and legal files. Translate them accurately into new languages.",
    },
    {
        icon: <FaBalanceScale className="text-blue-600 text-3xl" />,
        title: "Case Similarity & Lawsuit Help",
        description:
            "Find similar case laws and get AI-generated suggestions for potential lawsuits and strategies.",
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-900">
            <HeroSection />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-center mb-6 text-blue-800"
            >
                Welcome to LexAi
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
            >
                Your AI-powered legal assistant designed to research deeply, understand legacy documents, and suggest actions smartly.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white border border-blue-200 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-transform"
                    >
                        <div className="mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-center text-blue-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-700 text-center">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
