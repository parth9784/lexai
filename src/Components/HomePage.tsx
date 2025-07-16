import ContactSection from "./Contact";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const HomePage = () => {

    return (
        <>
            <Navbar/>
            <HeroSection/>    
            <FeatureSection />
            {/* <FAQSection /> */}
            <ContactSection />
            
        </>
    );
}

export default HomePage;