import { useThemeStore } from '../Store/ThemeStore';
import { useViewStore } from '../Store/ViewState'; // Add this import
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import { ArrowLeft } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

interface ProfilePageProps {
  onBackToChat?: () => void; 
}

export default function ProfilePage({ onBackToChat }: ProfilePageProps) {
  const { darkMode } = useThemeStore();
  const { setView } = useViewStore();

  const handleBackToChat = () => {
    if (onBackToChat) {
      onBackToChat(); 
    } else {
      setView('chat'); 
    }
  };

  return (
    <div 
      className="h-full overflow-y-auto"
      style={{ 
        backgroundColor: darkMode ? '#0c111a' : '#f5f7fa',
        color: darkMode ? '#ffffff' : '#1f2937'
      }}
    >
      {/* Header with Back Button */}
      <div 
        className="sticky top-0 z-10 px-6 py-4 border-b"
        style={{ 
          backgroundColor: darkMode ? '#111827' : '#ffffff',
          borderColor: darkMode ? '#2c2f36' : '#e5e7eb'
        }}
      >
        <button
          onClick={handleBackToChat}
          className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
          style={{ 
            color: darkMode ? '#9ca3af' : '#6b7280'
          }}
        >
          <ArrowLeft size={16} />
          Back to Chat
        </button>
      </div>
      
      <div className="p-6 space-y-6">
        <PersonalInformation />
        <ChangePassword />
      </div>
      
      {/* Toast notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? '#374151' : '#ffffff',
            color: darkMode ? '#ffffff' : '#1f2937',
            border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </div>
  );
}