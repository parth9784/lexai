import { useEffect, useRef, useState } from "react";
import {
  FileText,
  ClipboardList,
  FileBarChart2,
  Search,
  Languages,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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
    <section ref={containerRef} className="min-h-[450vh] flex relative bg-white text-gray-800 manrope-500">
      {/* LEFT SECTION */}
      <div className="sticky top-0 flex flex-col justify-center items-start w-1/2 h-screen px-12 lg:px-16">
        <div className="max-w-lg">
          <h2 className="text-5xl lg:text-6xl font-semibold text-blue-900 mb-6 leading-tight">
            Why LexAi?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            LexAi empowers lawyers and legal teams to research, draft, review, and analyze with AI-enhanced capabilities, built specifically for legal practice.
          </p>
          <button onClick={() => {navigate('/login')}} className="bg-[#C18D21] cursor-pointer text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#a67413] transition-all duration-300 transform hover:scale-105 font-semibold">
            Explore LexAi
          </button>
        </div>
      </div>

      {/* STACKED CARDS */}
      <div className="w-1/2 sticky top-0 h-screen relative overflow-hidden flex items-center justify-center">
        <div className="relative w-[340px] h-[340px]">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white rounded-2xl px-8 py-10 border-t-4 border-[#C18D21] shadow-xl 
                transition-all duration-700 ease-out text-center flex flex-col items-center justify-center"
              style={{ transformOrigin: 'center center' }}
            >
              <div className="w-16 h-16 rounded-full bg-[#C18D21]/10 flex items-center justify-center mb-5 shadow-inner">
                <feature.icon size={34} className="text-[#C18D21]" />
              </div>
              <h3 className="text-xl font-semibold text-[#C18D21] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-[260px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
