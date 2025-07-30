import { Coins } from 'lucide-react';
import { useThemeStore } from '../Store/ThemeStore';
import { useTransactionStore } from '../Store/TransactionStore';

export default function CreditsBadge() {
  const { darkMode } = useThemeStore();
  const { credits } = useTransactionStore()

  const containerClass = `flex items-center gap-2 px-3 py-3 rounded-md border border-[#C18D21] ${
    darkMode
      ? 'bg-gradient-to-br from-[#1e1e2e] to-[#141420]'
      : 'bg-gradient-to-br from-white to-gray-100'
  }`;

  const coinColor = darkMode ? 'text-yellow-400' : 'text-yellow-600';
  const countColor = darkMode ? 'text-white' : 'text-gray-800';
  const labelColor = darkMode ? 'text-gray-400' : 'text-gray-700';

  return (
    <div className={containerClass}>
      <Coins size={16} className={coinColor} />
      <span className={`font-semibold text-sm ${countColor}`}>{credits}</span>
      <span className={`text-sm ${labelColor}`}>Credits</span>
    </div>
  );
}
