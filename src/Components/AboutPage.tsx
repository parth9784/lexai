import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Drafting",
    description:
      "Generate legally sound documents, notices, contracts, and letters instantly with AI assistance.",
  },
  {
    title: "Document Q&A",
    description:
      "Ask LexAi questions about uploaded legal documents and get direct, contextual answers.",
  },
  {
    title: "Contract Reviewing",
    description:
      "Highlight risky clauses, missing elements, or summarize contracts in seconds using NLP-powered analysis.",
  },
  {
    title: "Case Reports & Analysis",
    description:
      "Upload judgments, FIRs, or case laws — LexAi extracts key arguments, citations, and provides summaries.",
  },
  {
    title: "Legal Research",
    description:
      "Save hours of reading with AI-based legal research and case referencing suggestions tailored to your context.",
  },
  {
    title: "OCR & Translation",
    description:
      "Convert scanned legal documents to searchable text and translate between regional Indian languages and English.",
  },
];

export default function AboutPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#C18D21] mb-4">About LexAi</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          LexAi is your intelligent legal assistant designed to empower lawyers, legal teams,
          and law students with cutting-edge AI tools. Whether it's drafting documents,
          translating regional texts, or analyzing complex case data — LexAi helps you work
          faster, smarter, and more effectively.
        </p>
      </motion.div>

      {/* Core Capabilities */}
      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-blue-900 mb-10"
        >
          Core Capabilities
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition border-l-4 border-[#C18D21]"
            >
              <h3 className="text-xl font-semibold text-[#C18D21] mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why LexAi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-semibold text-[#C18D21] mb-4">Why Choose LexAi?</h2>
        <p className="text-gray-700 text-md md:text-lg max-w-3xl mx-auto">
          LexAi isn’t just automation — it’s augmentation. Built specifically for the legal domain,
          it understands the intricacies of law, delivering insights, summaries, and support tailored to your workflow.
        </p>
      </motion.div>

      {/* Mission & Vision Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed text-center">
            At LexAi, our mission is to democratize legal technology, making AI-driven legal assistance
            accessible, efficient, and reliable for everyone in the legal ecosystem — from solo
            practitioners to large law firms.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Future Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed text-center">
            We're continuously improving LexAi to adapt to changing legal landscapes, ensuring
            transparency, security, and legal relevance. Our goal is to be a companion that not
            only simplifies work but also inspires innovation in legal practice.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
