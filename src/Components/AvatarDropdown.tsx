import { useState } from "react";
import {
  Pencil,
  Wallet,
  LogOut,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useViewStore } from "../Store/ViewState"; 
import ThemedAvatar from "./Avatar";
import { useThemeStore } from "../Store/ThemeStore";

type Props = {
  name: string;
  email: string;
  isOnline?: boolean;
  onProfileClick?: () => void; 
};

export default function AvatarDropdown({ name, email, isOnline, onProfileClick }: Props) {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  const { darkMode } = useThemeStore();
  const { setView } = useViewStore(); // Use global view state

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick(); // Use prop callback if provided
    } else {
      setView('profile'); // Otherwise use global state
    }
    setOpen(false);
  };

  const dropdownBg = darkMode ? "bg-[#1b2430] border-[#2c2f36]" : "bg-white border-gray-200";
  const hoverBg = darkMode ? "hover:bg-[#2a303c]" : "hover:bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-black";
  const subTextColor = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className="relative inline-block text-left manrope-500">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-3 cursor-pointer rounded-xl px-2 py-1 transition-all duration-200 
          ${darkMode
            ? "hover:outline hover:outline-1 hover:outline-[#2e3745] hover:bg-[#2e37451a]"
            : "hover:outline hover:outline-1 hover:outline-gray-300 hover:bg-gray-50"
          }`}
      >
        <ThemedAvatar name={name} isOnline={isOnline} />
        <div className="text-left">
          <div className={`font-semibold leading-tight ${textColor}`}>{name}</div>
          <div className={`text-xs ${subTextColor}`}>Premium Member</div>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${subTextColor} ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-3 right-0 w-72 rounded-xl z-50 overflow-hidden shadow-lg border transition-all duration-200 ${dropdownBg}`}
        >
          {/* Header */}
          <div className={`flex items-center gap-4 px-4 py-4 border-b ${darkMode ? "border-[#2c2f36]" : "border-gray-200"}`}>
            <ThemedAvatar name={name} />
            <div>
              <div className={`font-semibold ${textColor}`}>{name}</div>
              <div className={`text-xs ${subTextColor}`}>{email}</div>
            </div>
            <ShieldCheck className="ml-auto text-yellow-400" size={18} />
          </div>

          {/* Options */}
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={handleProfileClick}
              className={`w-full flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition ${textColor} ${hoverBg}`}
            >
              <Pencil size={18} className="text-blue-500" /> Profile
            </button>
            <button
              className={`w-full flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition ${textColor} ${hoverBg}`}
            >
              <Wallet size={18} className="text-purple-500" /> Wallet
            </button>
            <button
              className={`w-full flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition ${
                darkMode
                  ? "text-red-500 hover:bg-[#2a303c]"
                  : "text-red-600 hover:bg-gray-100"
              }`}
            >
              <LogOut size={18} /> Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
