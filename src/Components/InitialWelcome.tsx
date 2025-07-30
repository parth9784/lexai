import { Scale } from "lucide-react";
import { useThemeStore } from "../Store/ThemeStore";

export default function InitialWelcome() {
  const { darkMode } = useThemeStore();

  const iconWrapperStyle = {
    backgroundColor: darkMode ? "#0f1e2e" : "#ffffff",
    borderColor: darkMode ? "#0f1e2e" : "#ffffff",
  };

  const textColor = darkMode ? "#ffffff" : "#000000";
  const descriptionColor = darkMode ? "#94a3b8" : "#4b5563";
  const iconColor = darkMode ? "#ffffff" : "#1e3a8a";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-24 px-4 gap-4 manrope-500">
      {/* Bot Icon */}
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: iconWrapperStyle.backgroundColor }}
      >
        <Scale size={26} style={{ color: iconColor }} />
        <div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2"
          style={{ borderColor: iconWrapperStyle.borderColor }}
        />
      </div>

      {/* Welcome Heading */}
      <h2
        className="text-2xl sm:text-3xl font-bold mt-2"
        style={{ color: textColor }}
      >
        Hi Parth, Welcome to{" "}
        <span style={{ color: "#C18D21" }}>LexAi</span>
      </h2>

      {/* Description */}
      <p
        className="text-base sm:text-lg max-w-xl mt-3"
        style={{ color: descriptionColor }}
      >
        Ask me anything! I’m here to help with your questions, provide insights,
        or just have a friendly conversation.
      </p>
    </div>
  );
}
