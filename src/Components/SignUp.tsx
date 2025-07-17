import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import {
  Mail,
  ArrowRight,
  User,
  RotateCcw,
  Smartphone,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAuthStore } from "../Store/AuthState";
import type { SignupFormData } from "../Services/AuthenticationServices";

export default function SignupPage() {
  const [captchaCode, setCaptchaCode] = useState("");
  const [rotating, setRotating] = useState(false);
  const { signUp,loading } = useAuthStore()
  

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setRotating(true);
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
    setTimeout(() => setRotating(false), 500);
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile_number: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid mobile number")
      .required("Mobile number is required"),
    // password: Yup.string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
    captcha: Yup.string()
      .oneOf([captchaCode], "Invalid captcha")
      .required("Captcha is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    captcha: "",
  };

  const handleSubmit = async (values: SignupFormData & { captcha: string }) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {captcha, ...signUpData } = values; // Remove captcha
    await signUp(signUpData); // Only send relevant data
    toast.success("Signup successful!");
  } catch (error) {
    console.error("Signup failed:", error);
    toast.error("Signup failed!");
  }
};



  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#C18D21]">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Your AI-powered legal assistant
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* First Name */}
              <div className="relative">
                <User className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage name="first_name" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

              {/* Last Name */}
              <div className="relative">
                <User className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage name="last_name" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

              {/* Mobile */}
              <div className="relative">
                <Smartphone className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="mobile_number"
                  type="text"
                  placeholder="Mobile Number"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage name="mobile_number" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

             
              {/* Captcha */}
              <div className="flex items-center gap-4">
                <div className="bg-white border text-black text-xl font-bold px-6 py-2 rounded-lg shadow-sm select-none">
                  {captchaCode}
                </div>
                <Field
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#C18D21] placeholder:text-sm"
                />
                <button
                  title="Refresh Captcha"
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm text-[#C18D21] hover:underline cursor-pointer"
                >
                  <RotateCcw className={rotating ? "animate-spin" : ""} size={21} />
                </button>
              </div>
              <ErrorMessage name="captcha" component="div" className="text-sm text-red-600 mt-1 ml-1" />

              {/* Submit */}
              {/* <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Sign Up <ArrowRight size={18} />
              </button> */}
              <button
  type="submit"
  disabled={loading}
  className={`w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? (
    <span className="animate-pulse">Creating...</span>
  ) : (
    <>
      Sign Up <ArrowRight size={18} />
    </>
  )}
</button>

            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#C18D21] hover:underline">
            Login
          </a>
        </p>
      </div>

      <DotLottieReact
        src="https://lottie.host/9f84d078-b3f2-4be0-8b57-24a889dc67b6/n867Bwxtkn.lottie"
        loop
        autoplay
        className="hidden lg:block w-[800px]"
      />
       <Toaster />
    </div>
  );
}
