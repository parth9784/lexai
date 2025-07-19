import { FileText, ClipboardList, FileBarChart2, Search, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Smart Legal Drafting",
    description:
      "Generate professionally structured legal drafts including notices, petitions, affidavits, and contracts tailored to your case with a single prompt.",
  },
  {
    icon: Search,
    title: "Document Question & Answer",
    description:
      "Upload any legal document — LexAi reads and allows you to ask context-aware questions with pinpointed, legally aligned answers.",
  },
  {
    icon: ClipboardList,
    title: "Contract Review & Summarization",
    description:
      "Detect risky clauses, highlight missing components, and summarize lengthy contracts instantly using advanced AI understanding.",
  },
  {
    icon: FileBarChart2,
    title: "Case Report & Analysis",
    description:
      "LexAi extracts facts, issues, citations, and judgments from FIRs, charge sheets, and court rulings to build clean reports.",
  },
  {
    icon: Search,
    title: "AI-Powered Legal Research",
    description:
      "Perform focused legal research with AI. Get case references, sections, and structured insights based on your legal scenario.",
  },
  {
    icon: Languages,
    title: "OCR & Language Translation",
    description:
      "Convert scanned or handwritten documents into searchable digital files and translate between Indian regional languages and English.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // Use a cubic bezier array for ease
    },
  }),
};

export default function FeatureSection() {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-20 bg-white text-gray-800 manrope-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-semibold text-blue-900 mb-4">
            Why LexAi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LexAi empowers lawyers and legal teams to research, draft, review, and analyze with AI-enhanced capabilities, built specifically for legal practice.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-8 bg-[#C18D21] cursor-pointer text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#a67413] transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Explore LexAi
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white border-t-4 cursor-pointer border-[#C18D21] rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center"
            >
              <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-[#C18D21]/10 flex items-center justify-center">
                <feature.icon size={28} className="text-[#C18D21]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C18D21] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
