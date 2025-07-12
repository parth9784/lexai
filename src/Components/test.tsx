import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function FadeScrollSection() {
    const ref = useRef(null);

    // Get scroll progress within the section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // Start fade when top enters bottom, finish when bottom exits top
    });


    // Create motion values based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // 1 → 0
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]); // Optional slide effect

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center bg-white px-6">
            <motion.div
                style={{ opacity, y: translateY }}
                className="text-center max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                    Your Smart Legal Assistant
                </h2>
                <p className="text-lg text-gray-700">
                    With LexAi, automate legal research, analyze FIRs, draft documents, and much more with unmatched accuracy and speed.
                </p>
            </motion.div>
        </section>
    );
}
