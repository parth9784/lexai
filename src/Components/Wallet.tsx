import { RefreshCcw, ArrowDownRight, ArrowUpRight, FileText, Activity } from "lucide-react";
import { useThemeStore } from "../Store/ThemeStore";

export default function WalletDashboard() {
  const { darkMode } = useThemeStore();

  const containerStyle = {
    backgroundColor: darkMode ? "#0f172a" : "#ffffff",
    color: darkMode ? "#f1f5f9" : "#1e293b",
  };

  return (
    <div className="p-6 space-y-6" style={containerStyle}>
      {/* Wallet Balance Section */}
      <div
        className="rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          color: "#fff",
        }}
      >
        <div>
          <div className="text-lg font-medium">Wallet Balance</div>
          <div className="text-sm text-white/80">Available funds in your account</div>
          <div className="text-4xl font-bold mt-3">₹0.<span className="text-xl font-medium">00</span></div>
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
          bgColor={darkMode ? "#0f3c24" : "#e6f7ed"}
          textColor="#16a34a"
        />
        <SummaryCard
          title="Total Debited"
          value="₹500"
          icon={<ArrowDownRight size={18} />}
          bgColor={darkMode ? "#3b0d0c" : "#ffecec"}
          textColor="#dc2626"
        />
        <SummaryCard
          title="Transactions"
          value="3"
          icon={<Activity size={18} />}
          bgColor={darkMode ? "#1e293b" : "#e9f1ff"}
          textColor={darkMode ? "#3b82f6" : "#2563eb"}
        />
      </div>

      {/* Transaction History */}
      <div
        className="rounded-2xl p-6"
        style={{ backgroundColor: darkMode ? "#1e293b" : "#f9fafb" }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <FileText size={20} className="text-[#8b5cf6]" />
            Transaction History
          </div>
          <input
            type="text"
            placeholder="Search transactions..."
            className="px-4 py-2 rounded-md text-sm border outline-none bg-white dark:bg-[#0f172a] dark:text-white border-gray-300 dark:border-gray-700"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {["All", "Credit", "Debit"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                idx === 0
                  ? "bg-[#2563eb] text-white"
                  : darkMode
                  ? "bg-[#1e293b] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* No Transactions Message */}
        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400 dark:text-gray-500">
          <FileText size={32} />
          <p className="mt-2 text-sm">No transactions found</p>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  icon,
  bgColor,
  textColor,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div
      className="p-5 rounded-xl flex justify-between items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</div>
        <div className="text-xl font-bold" style={{ color: textColor }}>
          {value}
        </div>
      </div>
      <div
        className="p-2 rounded-md"
        style={{ backgroundColor: "#ffffff30", color: textColor }}
      >
        {icon}
      </div>
    </div>
  );
}
