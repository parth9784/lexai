import { motion } from "framer-motion";
import { FaBrain, FaDownload, FaSearch, FaLanguage, FaBalanceScale } from "react-icons/fa";
import HeroSection from "./HeroSection";

const features = [
    {
        icon: <FaBrain className="text-blue-600 text-4xl" />,
        title: "Context-Aware Suggestions",
        description:
            "Get intelligent legal suggestions from extensive law databases like Mumbai High Court and more.",
    },
    {
        icon: <FaDownload className="text-blue-600 text-4xl" />,
        title: "Real-time Brave Access",
        description:
            "Access the latest legal information online. Export any chat or insight for future use.",
    },
    {
        icon: <FaSearch className="text-blue-600 text-4xl" />,
        title: "Deep Legal Research",
        description:
            "Dive into specific legal subjects and generate ready-to-use structured PDFs, summaries, and docs.",
    },
    {
        icon: <FaLanguage className="text-blue-600 text-4xl" />,
        title: "OCR & Translation",
        description:
            "Revive damaged FIRs or paper files with OCR. Translate legal text into modern, usable language.",
    },
    {
        icon: <FaBalanceScale className="text-blue-600 text-4xl" />,
        title: "Case Similarity & Lawsuit Generator",
        description:
            "Find precedent cases and get smart suggestions on next legal actions or filing suits.",
    },
];

export default function FeatureSection() {
    return (
        <div className="min-h-screen bg-gradient-to-b  text-gray-900 manrope-500">
            <HeroSection />

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center my-12"
            >
                <h2 className="text-4xl font-bold text-blue-800 mb-4">
                    LexAi Features
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover the tools that make LexAi the most efficient and reliable AI assistant for modern legal professionals.
                </p>
            </motion.div>

            {/* Feature Cards */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-20">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 p-6"
                    >
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-center text-blue-700 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div> */}
            <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-6 pb-20">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white border cursor-pointer border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 p-6 w-full sm:w-[45%] lg:w-[30%]"
                    >
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-center text-blue-700 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
