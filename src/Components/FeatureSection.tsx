import { motion } from "framer-motion";
import {
    BrainCog,
    Download,
    Search,
    Languages,
    Scale,
} from "lucide-react";
import HeroSection from "./HeroSection";

const features = [
    {
        icon: BrainCog,
        title: "Context-Aware Suggestions",
        description:
            "Get intelligent legal suggestions from extensive law databases like Mumbai High Court and more.",
    },
    {
        icon: Download,
        title: "Real-time Brave Access",
        description:
            "Access the latest legal information online. Export any chat or insight for future use.",
    },
    {
        icon: Search,
        title: "Deep Legal Research",
        description:
            "Dive into specific legal subjects and generate ready-to-use structured PDFs, summaries, and docs.",
    },
    {
        icon: Languages,
        title: "OCR & Translation",
        description:
            "Revive damaged FIRs or paper files with OCR. Translate legal text into modern, usable language.",
    },
    {
        icon: Scale,
        title: "Case Similarity & Lawsuit Generator",
        description:
            "Find precedent cases and get smart suggestions on next legal actions or filing suits.",
    },
];

export default function FeatureSection() {
    return (
        <div className="min-h-screen bg-white text-gray-900 manrope-500">
            <HeroSection />

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center my-12"
            >
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose LexAi?</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover the tools that make LexAi the most efficient and reliable AI assistant for modern legal professionals.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-6 pb-20">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 p-6 w-full sm:w-[45%] lg:w-[30%] cursor-pointer"
                        >
                            <div className="flex justify-center mb-4 ">
                                <div className="bg-[#f9f4ea] p-4 rounded-full">
                                    <Icon size={28} className="text-[#C18D21]" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center text-black mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
