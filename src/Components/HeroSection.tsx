import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import { useEffect} from "react";

export default function HeroSection() {
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-6 text-gray-900 overflow-hidden">
      {/* Floating Background Elements */}
      {/* <div className="absolute inset-0 z-0">{boxes}</div> */}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center z-10"
      >
    
        <motion.h1
  className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-blue-900 manrope-500 flex flex-wrap justify-center"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {["Your", "Legal", "AI", "Partner."].map((word, i) => (
    <motion.span
      key={i}
      variants={wordVariants}
      className="mr-2"
    >
      {word}
    </motion.span>
  ))}

  {/* Line break with second line in gold */}
  <div className="w-full flex justify-center mt-2">
    {["Reliable.", "Fast.", "Smart."].map((word, i) => (
      <motion.span
        key={`highlight-${i}`}
        variants={wordVariants}
        className="mr-2 text-[#C08C21]"
      >
        {word}
      </motion.span>
    ))}
  </div>
</motion.h1>


        <p className="text-md md:text-lg text-gray-700 mb-8 manrope-500">
          LexAi empowers legal professionals with AI-driven research, case insights,
          and real-time legal intelligence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 cursor-pointer py-3 bg-[#C08C21] text-white rounded-lg hover:bg-[#d09217] transition shadow-md hover:shadow-xl flex gap-2 items-center justify-center">
            Request a Demo <ArrowRight size={23} />
          </button>
          <button className="px-6 cursor-pointer py-3 border border-black text-[#C08C21] rounded-lg hover:bg-[#C08C21] hover:text-white transition shadow-sm hover:shadow-md">
            See the Docs
          </button>
        </div>
      </motion.div>
    </section>
  );
}
