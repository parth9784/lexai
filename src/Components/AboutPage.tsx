import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Search, ClipboardList, FileBarChart2, BookOpenText, Languages } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Drafting",
    description:
      "Generate legally sound documents, notices, contracts, and letters instantly with AI assistance.",
  },
  {
    icon: Search,
    title: "Document Q&A",
    description:
      "Ask LexAi questions about uploaded legal documents and get direct, contextual answers.",
  },
  {
    icon: ClipboardList,
    title: "Contract Reviewing",
    description:
      "Highlight risky clauses, missing elements, or summarize contracts in seconds using NLP-powered analysis.",
  },
  {
    icon: FileBarChart2,
    title: "Case Reports & Analysis",
    description:
      "Upload judgments, FIRs, or case laws — LexAi extracts key arguments, citations, and provides summaries.",
  },
  {
    icon: BookOpenText,
    title: "Legal Research",
    description:
      "Save hours of reading with AI-based legal research and case referencing suggestions tailored to your context.",
  },
  {
    icon: Languages,
    title: "OCR & Translation",
    description:
      "Convert scanned legal documents to searchable text and translate between regional Indian languages and English.",
  },
];


export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (containerHeight - windowHeight)));
      const newIndex = Math.floor(scrollProgress * features.length);
      const activeIndex = Math.min(newIndex, features.length - 1);

      setCurrentIndex(activeIndex);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const cardProgress = Math.max(0, Math.min(1, (scrollProgress * features.length) - i));

        if (i < activeIndex) {
          card.style.transform = `translateY(-${100 + cardProgress * 50}vh) rotate(-45deg) scale(0.8)`;
          card.style.opacity = '0.3';
          card.style.zIndex = `${i}`;
        } else if (i === activeIndex) {
          const activeProgress = (scrollProgress * features.length) - activeIndex;
          const rotation = -8 * activeProgress;
          const scale = 1 + 0.05 * Math.sin(activeProgress * Math.PI);

          card.style.transform = `translateY(0) rotate(${rotation}deg) scale(${scale})`;
          card.style.opacity = '1';
          card.style.zIndex = `${features.length}`;
          card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        } else {
          const stackOffset = (i - activeIndex) * 8;
          const rotation = -stackOffset;
          const yOffset = stackOffset * 2;
          const scale = 1 - (i - activeIndex) * 0.02;

          card.style.transform = `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`;
          card.style.opacity = '0.7';
          card.style.zIndex = `${features.length - i}`;
          card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f5f7fa] text-gray-800 py-20 px-6 sm:px-10 lg:px-24 manrope-500">
      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#C18D21] mb-6">About LexAi</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          LexAi is your intelligent legal assistant designed to empower lawyers, legal teams,
          and law students with cutting-edge AI tools. Whether it's drafting documents,
          translating regional texts, or analyzing complex case data — LexAi helps you work
          faster, smarter, and more effectively.
          <br /><br />

          Our mission is to democratize access to legal technology by combining advanced machine learning,
    natural language processing, and blockchain-backed innovation. From solo advocates to large legal teams,
    LexAi delivers real-time insights, precise document understanding, and automation that actually understands the law.

     <br /><br />

       We’re not just building another legal tool — we’re building a dependable AI partner for legal professionals.
    By learning from legal databases, judgments, and case trends, LexAi ensures relevance, clarity, and speed in every interaction.
    Whether you're preparing a petition or researching case law, LexAi works by your side — intelligently.
        </p>
      </motion.div>
     

      {/* Scroll-Staggered Core Capabilities Section */}
      <section ref={containerRef} className="min-h-[450vh] flex relative mt-11">
        {/* Left panel */}
        <motion.div
          className="sticky top-0 flex flex-col justify-center items-start w-1/2 h-screen px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#C18D21] mb-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            Core Capabilities
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            LexAi brings together advanced AI tools to assist in legal drafting, document review, case analysis, and more—empowering the next generation of legal practice.
          </motion.p>
        </motion.div>

        {/* Stacked scroll cards */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
  <div className="relative w-[300px] h-[300px]">
    {features.map((feature, i) => (
      <motion.div
        key={i}
        ref={(el) => { cardRefs.current[i] = el; }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-white rounded-2xl px-8 py-10 border-t-4 border-[#C18D21] shadow-xl 
          transition-all duration-700 ease-out text-center flex flex-col items-center justify-center"
        style={{ transformOrigin: "center center" }}
      >
        {/* ICON SECTION */}
        <div className="w-14 h-14 mb-4 rounded-full bg-[#C18D21]/10 flex items-center justify-center shadow-inner">
          <feature.icon size={28} className="text-[#C18D21]" />
        </div>

        <h3 className="text-xl font-semibold text-[#C18D21] mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed max-w-[260px]">
          {feature.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>

      </section>

      {/* Why LexAi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h2 className="text-3xl font-semibold text-[#C18D21] mb-4">Why Choose LexAi?</h2>
        <p className="text-gray-700 text-md md:text-lg max-w-3xl mx-auto">
          LexAi isn’t just automation — it’s augmentation. Built specifically for the legal domain,
          it understands the intricacies of law, delivering insights, summaries, and support tailored to your workflow.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {[
          {
            title: "Our Mission",
            content:
              "At LexAi, our mission is to democratize legal technology, making AI-driven legal assistance accessible, efficient, and reliable for everyone in the legal ecosystem — from solo practitioners to large law firms.",
          },
          {
            title: "Future Vision",
            content:
              "We're continuously improving LexAi to adapt to changing legal landscapes, ensuring transparency, security, and legal relevance. Our goal is to be a companion that not only simplifies work but also inspires innovation in legal practice.",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{card.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed text-center">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
