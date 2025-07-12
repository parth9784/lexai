import './App.css'
import ContactSection from './Components/Contact';
import FAQSection from './Components/Faq';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';

function App() {


  return (
    <div className="bg-white">
      <Navbar />
      <HomePage />
      <FAQSection />
      <ContactSection />
    </div>
  )
}

export default App;
