import { useRef } from "react";
import ContactSection from "./Contact";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

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

            <HeroSection/>    

            <div ref={featureRef}>
                <FeatureSection />
            </div>

            {/* <FAQSection /> */}

            <div ref={contactRef}>
                <ContactSection />
            </div>
        </>
    );
}

export default HomePage;