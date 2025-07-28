import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast, Toaster } from "react-hot-toast";
import { useAuthStore } from "../Store/AuthState";

export default function ForgotPasswordPage() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const { forgotPassword } = useAuthStore();

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      // Simulate sending reset email
      await forgotPassword(values.email);
      console.log("Sending reset link to:", values.email);
    //   toast.success("New Password sent to your email.");
    } catch (error) {
      console.error("Error sending reset link:", error);
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[400px] p-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#C18D21]">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your email to receive a reset link
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-600 mt-1 ml-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Send Reset Link <ArrowRight size={18} />
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="text-[#C18D21] hover:underline">
            Login
          </a>
        </p>
      </div>

      <DotLottieReact
        src="https://lottie.host/1d4ac06d-cb22-4962-8399-2d8f10203c16/sw85I6ToNM.lottie"
        loop
        autoplay
        className="hidden lg:block w-[850px]"
      />
      <Toaster />
    </div>
  );
}
