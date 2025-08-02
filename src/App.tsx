import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/SignUp";
import LexAiChat from "./Components/ChatBot";
import PricingPage from "./Components/Pricing";
import FAQSection from "./Components/FaqPage";
import AboutPage from "./Components/AboutPage";
import ForgotPasswordPage from "./Components/ForgotPassword";
import ProfilePage from "./Components/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chat" element={
          <ProtectedRoute>
            <LexAiChat />
          </ProtectedRoute>
          } />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forgot/password" element={<ForgotPasswordPage />} />
        <Route path="/profile/page" element={
           <ProtectedRoute>
              <ProfilePage />
           </ProtectedRoute>        
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <LexAiChat /> */}
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
