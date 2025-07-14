import { useState, useEffect } from "react";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    User,
    RotateCcw,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function SignupPage() {
    const [captchaCode, setCaptchaCode] = useState("");
    const [rotating, setRotating] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        captcha: "",
    });

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        setRotating(true);
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setCaptchaCode(code);
        setTimeout(() => setRotating(false), 500);
    };

    const handleChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formData.captcha !== captchaCode) {
            alert("Invalid captcha. Please try again.");
            return;
        }
        console.log("Signed up:", formData);
    };

    return (
        <div className="min-h-screen bg-[#f5f7fa] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-10">
            {/* Signup Form */}
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-1 text-[#C18D21]">
                    Create Account
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Your AI-powered legal assistant
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                        <User className="absolute top-3 left-4 text-gray-400" size={18} />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C18D21]"
                            required
                        />
                    </div>

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

                    {/* Captcha */}
                    <div className="flex items-center gap-4">
                        <div className="bg-white border text-black text-xl font-bold px-6 py-2 rounded-lg shadow-sm select-none">
                            {captchaCode}
                        </div>
                        <input
                            type="text"
                            name="captcha"
                            placeholder="Enter Captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            className="flex-1 bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#C18D21] placeholder:text-sm"
                            required
                        />
                        <button
                            title="Refresh Captcha"
                            type="button"
                            onClick={generateCaptcha}
                            className="text-sm text-[#C18D21] hover:underline cursor-pointer"
                        >
                            <RotateCcw
                                className={rotating ? "animate-spin" : ""}
                                size={21}
                            />
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 bg-[#C18D21] hover:bg-[#b0841c] text-white font-semibold py-2 px-4 rounded-lg transition"
                    >
                        Sign Up <ArrowRight size={18} />
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#C18D21] hover:underline">
                        Login
                    </a>
                </p>
            </div>

            {/* Lottie Animation - Hidden on Mobile */}
            <DotLottieReact
                src="https://lottie.host/9f84d078-b3f2-4be0-8b57-24a889dc67b6/n867Bwxtkn.lottie"
                loop
                autoplay
                className="hidden lg:block w-[800px]"
            />
        </div>
    );
}
