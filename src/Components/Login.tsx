import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useAuthStore } from "../Store/AuthState";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
    const { loading, Login } = useAuthStore()

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Logging in with:", values);
    const loginData = {
      username: values.email,
      password: values.password,
    }
    Login(loginData);
    // Add your login API call here
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[400px] p-8">
        <h2 className="text-2xl font-bold text-center mb-1 text-[#C18D21]">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Sign in to continue to LexAi
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute top-3 left-4 text-gray-400" size={18} />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                />
                {showPassword ? (
                  <EyeOff
                    className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                    size={18}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                    size={18}
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <ErrorMessage name="password" component="div" className="text-sm text-red-600 mt-1 ml-1" />
              </div>

              {/* Submit */}
              {/* <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Login <ArrowRight size={18} />
              </button> */}
              <button
  type="submit"
  disabled={loading}
  className={`w-full flex justify-center items-center gap-2 ${
    loading ? "bg-[#b0841c] cursor-not-allowed" : "bg-[#C18D21] hover:bg-[#b0841c]"
  } text-white font-semibold py-2 px-4 rounded-lg transition`}
>
  {loading ? (
  <div className="flex items-center gap-2 animate-pulse">
    <Loader className="animate-spin" size={14} />
    <span>Logging in...</span>
  </div>
) : (
  <>
    Login <ArrowRight size={18} />
  </>
)}

</button>
            </Form>
          )}
        </Formik>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            {/* <input type="checkbox" className="accent-[#C18D21]" /> Remember me */}
          </label>
          <a href="/forgot/password" className="text-[#C18D21] hover:underline">
            Forgot password?
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#C18D21] hover:underline">
            Sign up
          </a>
        </p>
      </div>

      <DotLottieReact
        src="https://lottie.host/d27e7c97-6d1a-4890-9529-f3d8c7ff4793/AG0FYUUEL5.lottie"
        loop
        autoplay
        className="hidden lg:block w-[1000px]"
      />
      <Toaster />
    </div>
  );
}
