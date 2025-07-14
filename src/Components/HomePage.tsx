import { useRef } from "react";
import ContactSection from "./Contact";
import FAQSection from "./Faq";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";

const HomePage = () => {
    const featureRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const scrollTo = (ref: any) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <Navbar
                scrollToFeatures={() => scrollTo(featureRef)}
                scrollToContact={() => scrollTo(contactRef)} />

            <div ref={featureRef}>
                <FeatureSection />
            </div>

            <FAQSection />

            <div ref={contactRef}>
                <ContactSection />
            </div>
        </>
    );
}

export default HomePage;