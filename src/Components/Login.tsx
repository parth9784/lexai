import { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
        // Add actual login logic here
    };

    return (
        <div className="min-h-screen bg-[#f5f7fa] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-10">
            {/* Login Form */}
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-1 text-[#C18D21]">
                    Welcome Back
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Sign in to continue to LexAi
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute top-3 left-4 text-gray-400" size={18} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute top-3 left-4 text-gray-400" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                            required
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
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition"
                    >
                        Login <ArrowRight size={18} />
                    </button>
                </form>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-[#C18D21]" /> Remember me
                    </label>
                    <a href="#" className="text-[#C18D21] hover:underline">
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
                className="hidden lg:block w-[900px]"
            />
        </div>
    );
}
