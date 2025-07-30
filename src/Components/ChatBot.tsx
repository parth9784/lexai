import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "../Store/ThemeStore"; 
import { useViewStore } from "../Store/ViewState";
import Sidebar from "./Sidebar";
import ChatInput from "./ChatInput";
import { Copy, Check, Upload, Scale, Sun, Moon, ArrowLeft } from "lucide-react";
import AvatarDropdown from "./AvatarDropdown";
import ProfilePage from "./ProfilePage";
import CreditsBadge from "./CreditsBadge";
import InitialWelcome from "./InitialWelcome";
import WalletDashboard from "./Wallet"; // Add this import

export default function LexAiChat() {
  const { darkMode, toggleTheme } = useThemeStore();
  const { currentView, setView } = useViewStore();
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'LexAi is processing your request...' }]);
    }, 1000);
    setInput('');
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Render different views based on currentView
  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile':
        return <ProfilePage onBackToChat={() => setView("chat")} />;
      case 'wallet':
        return <WalletPage onBackToChat={() => setView("chat")} />;
      case 'chat':
      default:
        return (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-4">
              <div className="max-w-4xl w-full mx-auto flex flex-col space-y-4 pb-4">
                {messages.length === 0 ? (
                  <InitialWelcome /> // Show welcome message if no messages
                ) : 
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-start' : 'justify-end'} w-full`}
                  >
                    <div
                      style={{
                        backgroundColor: msg.from === 'user' ? 'var(--user-bg)' : 'var(--bot-bg)',
                        color: msg.from === 'user' ? 'black' : 'var(--text-color)',
                      }}
                      className="relative group max-w-[85%] w-fit px-4 py-3 rounded-2xl text-sm shadow-md"
                    >
                      <p className="whitespace-pre-line leading-relaxed pr-6">{msg.text}</p>
                      {msg.from === 'bot' && (
                        <div className="flex justify-end pt-2">
                          <button
                            onClick={() => copyToClipboard(msg.text, i)}
                            className="hover:text-[#C18D21]"
                            title="Copy"
                          >
                            {copiedIndex === i ? <Check size={16} /> : <Copy size={16} />}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="px-6 py-4">
              <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden manrope-500" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

      <main className="flex-1 flex flex-col">
        {/* TOP NAVBAR */}
        <div style={{ backgroundColor: 'var(--bot-bg)' }} className="h-12 px-6 py-8 flex items-center justify-between border-b">
          <div className="font-semibold text-[22px] flex gap-2 items-center">
            <Scale size={24} /> LexAi
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-[14px] cursor-pointer">
              <Upload size={16} /> Share
            </button>
            <button onClick={toggleTheme} className="p-1 rounded cursor-pointer">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <CreditsBadge />
            <AvatarDropdown
              isOnline={true}
              onProfileClick={() => setView("profile")}
              onWalletClick={() => setView("wallet")} // Add wallet click handler
            />
          </div>
        </div>

        {/* Render current view */}
        {renderCurrentView()}
      </main>
    </div>
  );
}

// Create a wrapper component for the wallet with back navigation
interface WalletPageProps {
  onBackToChat?: () => void;
}

function WalletPage({ onBackToChat }: WalletPageProps) {
  const { darkMode } = useThemeStore();

  return (
    <div 
      className="h-full overflow-y-auto"
      style={{ 
        backgroundColor: darkMode ? '#0c111a' : '#f5f7fa',
        color: darkMode ? '#ffffff' : '#1f2937'
      }}
    >
      {/* Header with Back Button */}
      {onBackToChat && (
        <div 
          className="sticky top-0 z-10 px-6 py-4 border-b"
          style={{ 
            backgroundColor: darkMode ? '#111827' : '#ffffff',
            borderColor: darkMode ? '#2c2f36' : '#e5e7eb'
          }}
        >
          <button
            onClick={onBackToChat}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ 
              color: darkMode ? '#9ca3af' : '#6b7280'
            }}
          >
            <ArrowLeft size={16} />
            Back to Chat
          </button>
        </div>
      )}
      
      <WalletDashboard />
    </div>
  );
}
