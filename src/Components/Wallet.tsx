import {
  RefreshCcw,
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Activity,
} from "lucide-react";
import { useThemeStore } from "../Store/ThemeStore";

export default function WalletDashboard() {
  const { darkMode } = useThemeStore();
  const dark = darkMode;

  return (
    <div className={`p-6 space-y-6 ${dark ? "bg-[#0f0f1f] text-white" : "bg-white text-slate-800"}`}>
      {/* Wallet Balance */}
      <div className="rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
        <div>
          <div className="text-lg font-semibold">Wallet Balance</div>
          <div className="text-sm text-white/80">Available funds in your account</div>
          <div className="text-4xl font-bold mt-3">
            ₹0.<span className="text-xl font-medium">00</span>
          </div>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md">
            + Add Tokens
          </button>
        </div>
        <button className="mt-4 md:mt-0 p-2 rounded-full bg-white/20 hover:bg-white/30">
          <RefreshCcw size={18} className="text-white" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Credited"
          value="₹3,500"
          icon={<ArrowUpRight size={18} />}
          dark={dark}
        />
        <SummaryCard
          title="Total Debited"
          value="₹500"
          icon={<ArrowDownRight size={18} />}
          dark={dark}
        />
        <SummaryCard
          title="Transactions"
          value="3"
          icon={<Activity size={18} />}
          dark={dark}
          gold={true}
        />
      </div>

      {/* Transaction History */}
      <div className={`rounded-2xl p-6 ${dark ? "bg-[#1a1a2a]" : "bg-[#f5f5f5]"}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 font-semibold text-lg text-[#c18d21]">
            <FileText size={20} />
            Transaction History
          </div>
          <input
            type="text"
            placeholder="Search transactions..."
            className={`px-4 py-2 rounded-md text-sm border outline-none 
              ${dark
                ? "bg-[#0f172a] text-white border-gray-700"
                : "bg-white text-black border-gray-300"
              }`}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {["All", "Credit", "Debit"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                idx === 0
                  ? "bg-[#c18d21] text-white"
                  : `${dark
                    ? "bg-[#2a2a3d] text-white border border-gray-600"
                    : "bg-white text-gray-700 border border-gray-300"
                  }`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400 dark:text-gray-500">
          <FileText size={32} />
          <p className="mt-2 text-sm">No transactions found</p>
        </div>
      </div>
    </div>
  );
}

// ⬇️ SummaryCard now uses `dark` prop to apply theme
function SummaryCard({
  title,
  value,
  icon,
  dark,
  gold = false,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  dark: boolean;
  gold?: boolean;
}) {
  const bgClass = gold
    ? dark
      ? "bg-[#1a1f2e]"
      : "bg-[#f9fbff]"
    : title === "Total Credited"
    ? dark
      ? "bg-[#1f2d1f]"
      : "bg-[#fff9ec]"
    : dark
    ? "bg-[#2f1d1d]"
    : "bg-[#fff5f5]";

  const textClass = gold
    ? "text-[#c18d21]"
    : title === "Total Credited"
    ? dark
      ? "text-green-400"
      : "text-green-700"
    : dark
    ? "text-red-400"
    : "text-red-600";

  return (
    <div className={`p-5 rounded-xl flex justify-between items-center ${bgClass}`}>
      <div>
        <div className={`text-sm font-medium ${dark ? "text-gray-300" : "text-black"}`}>
          {title}
        </div>
        <div className={`text-xl font-bold ${textClass}`}>{value}</div>
      </div>
      <div className={`p-2 rounded-md bg-white/30 dark:bg-white/10 ${textClass}`}>
        {icon}
      </div>
    </div>
  );
}
