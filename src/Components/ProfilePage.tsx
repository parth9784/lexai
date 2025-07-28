import { useThemeStore } from '../Store/ThemeStore';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import { ArrowLeft } from 'lucide-react';

interface ProfilePageProps {
  onBackToChat?: () => void;
}

export default function ProfilePage({ onBackToChat }: ProfilePageProps) {
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
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ 
              color: darkMode ? '#9ca3af' : '#6b7280'
            }}
          >
            <ArrowLeft size={16} />
            Back to Chat
          </button>
        </div>
      )}
      
      <div className="p-6 space-y-6">
        <PersonalInformation />
        <ChangePassword />
      </div>
    </div>
  );
}