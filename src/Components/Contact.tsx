import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 manrope-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-900"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Email, call, or complete the form to learn how LexAi can solve your legal research & automation challenges.
          </p>

          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center space-x-3">
              <FiPhone className="text-[#C08C21] text-xl" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiMail className="text-[#C08C21] text-xl" />
              <span>support@lexai.in</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiMapPin className="text-[#C08C21] text-xl" />
              <span>Gurgaon, Haryana, India</span>
            </li>
          </ul>

          {/* Footer Info */}
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Customer Support</h4>
              <p>Our support team is available 24/7 to resolve your queries.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Feedback & Suggestions</h4>
              <p>Your input is key to improving LexAi’s capabilities and experience.</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl px-8 py-6 space-y-4 text-gray-700"
        >
          <h3 className="text-2xl font-bold text-blue-900">Get in Touch</h3>
          <p className="text-sm text-gray-500">You can reach us anytime</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="First name"
              className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#C08C21] focus:outline-none"
            />
            <input
              placeholder="Last name"
              className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#C08C21] focus:outline-none"
            />
          </div>

          <input
            placeholder="Your email"
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-[#C08C21] focus:outline-none"
          />

          <input
            placeholder="Phone number (optional)"
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-[#C08C21] focus:outline-none"
          />

          <textarea
            rows={4}
            placeholder="How can we help?"
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-[#C08C21] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#C08C21] cursor-pointer hover:bg-[#a67413] text-white px-6 py-2 rounded-md font-medium shadow-md transition duration-300"
          >
            Submit
          </button>

          <p className="text-xs text-gray-500 mt-2">
            By contacting us, you agree to our{" "}
            <span className="underline cursor-pointer text-[#C08C21]">Terms of Service</span> and{" "}
            <span className="underline cursor-pointer text-[#C08C21]">Privacy Policy</span>.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
