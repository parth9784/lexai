import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, type JSX } from "react";

export default function HeroSection() {
    const [boxes, setBoxes] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // Generate 30 floating boxes with random positions and delays
        const generatedBoxes = Array.from({ length: 50 }, (_, i) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 4 + Math.random() * 6;

            return (
                <div
                    key={i}
                    className="w-2 h-2 bg-blue-300 absolute animate-floating-box rounded-none"
                    style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                    }}
                />

            );
        });
        setBoxes(generatedBoxes);
    }, []);

    return (
        <section className="relative min-h-[90vh] bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-6 text-gray-900 overflow-hidden">
            {/* Animated Background Boxes */}
            <div className="absolute inset-0 z-0">{boxes}</div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl text-center z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-blue-900 manrope-500">
                    Your Legal AI Partner. <br className="hidden md:inline" />
                    <span className="text-[#C08C21]">Reliable. Fast. Smart.</span>
                </h1>
                <p className="text-md md:text-lg text-gray-700 mb-8 manrope-500">
                    LexAi empowers legal professionals with AI-driven research, case insights,
                    and real-time legal intelligence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-[#C08C21] cursor-pointer  text-white rounded-lg hover:bg-[#d09217]  transition shadow flex gap-2 items-center justify-center">
                        Request a Demo <ArrowRight size={23} />
                    </button>
                    <button className="px-6 py-3 border border-black text-[#C08C21] rounded-lg cursor-pointer hover:bg-[#C08C21] hover:text-white transition">
                        See the Docs
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

