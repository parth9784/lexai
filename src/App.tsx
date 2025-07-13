import './App.css'
import LexAiChat from './Components/ChatBot';
import ContactSection from './Components/Contact';
import FAQSection from './Components/Faq';
import FeatureSection from './Components/FeatureSection';
import Navbar from './Components/Navbar';
import { useRef } from "react";
function App() {
  const featureRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* <Navbar
        scrollToFeatures={() => scrollTo(featureRef)}
        scrollToContact={() => scrollTo(contactRef)} /> */}

      {/* <div ref={featureRef}>
        <FeatureSection />
      </div> */}

      {/* <FAQSection /> */}

      {/* <div ref={contactRef}>
        <ContactSection />
      </div> */}
      <LexAiChat />

    </div>
  )
}

export default App;
