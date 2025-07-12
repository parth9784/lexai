import './App.css'
import ContactSection from './Components/Contact';
import FAQSection from './Components/Faq';
import FeatureSection from './Components/FeatureSection';
import Navbar from './Components/Navbar';
// import FadeScrollSection from './Components/test';

function App() {


  return (
    <div className="bg-white">
      <Navbar />
      <FeatureSection />

      <FAQSection />
      <ContactSection />
    </div>
  )
}

export default App;
