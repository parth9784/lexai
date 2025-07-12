import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-6 text-gray-900">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-blue-800 manrope-500">
                    Your Legal AI Partner. <br className="hidden md:inline" />
                    Reliable. Fast. Smart.
                </h1>
                <p className="text-md md:text-lg text-gray-700 mb-8 manrope-500">
                    LexAi empowers legal professionals with AI-driven research, case insights, and real-time legal intelligence.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow">
                        Request a Demo
                    </button>
                    <button className="px-6 py-3 border border-blue-600 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        See the Docs
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

