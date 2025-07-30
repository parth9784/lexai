import { useState } from 'react';
import { LockKeyhole, Eye, EyeOff, Save, X, Edit } from 'lucide-react';
import toast from 'react-hot-toast';
import { useThemeStore } from '../Store/ThemeStore';

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePassword() {
  const { darkMode } = useThemeStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Partial<PasswordData>>({});

  const handleInputChange = (field: keyof PasswordData, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validatePasswords = (): boolean => {
    const newErrors: Partial<PasswordData> = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (passwordData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validatePasswords()) {
      return;
    }

    try {
      console.log('Changing password...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setIsExpanded(false);
      
      toast.success('Password changed successfully!');
    } catch (error) {
      toast.error('Failed to change password. Please try again.');
      console.error('Error changing password:', error);
    }
  };

  const handleCancel = () => {
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setErrors({});
    setIsExpanded(false);
  };

  // Theme-based styling
  const containerStyle = {
    backgroundColor: darkMode ? '#111827' : '#ffffff',
    borderColor: darkMode ? '#2c2f36' : '#e5e7eb'
  };

  const headerStyle = {
    backgroundColor: darkMode ? '#059669' : '#10b981',
    color: '#ffffff'
  };

  const inputClass = `w-full px-4 py-3 pr-12 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C18D21]/20 ${
    darkMode 
      ? 'bg-[#0f172a] text-white border-[#334155] placeholder:text-slate-400 focus:border-[#C18D21]' 
      : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:border-[#C18D21]'
  }`;

  const errorInputClass = `w-full px-4 py-3 pr-12 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20 ${
    darkMode 
      ? 'bg-[#0f172a] text-white border-red-500 placeholder:text-slate-400 focus:border-red-400' 
      : 'bg-white text-gray-900 border-red-500 placeholder:text-gray-500 focus:border-red-400'
  }`;

  const labelStyle = {
    color: darkMode ? '#cbd5e1' : '#374151'
  };

  return (
    <div 
      className="rounded-2xl overflow-hidden shadow-lg border"
      style={containerStyle}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-6 py-4"
        style={headerStyle}
      >
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <LockKeyhole size={20} /> Change Password
          </div>
          <div className="text-sm opacity-90">Update your account security</div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#C18D21] cursor-pointer hover:bg-[#a67c1e] text-white  font-medium text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
        >
          {isExpanded ? 'Close' : (
  <span className="flex items-center gap-1">
    <Edit size={16} /> Update
  </span>
)}
        </button>
      </div>

      {/* Password Form */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium mb-2" style={labelStyle}>
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.current ? 'text' : 'password'}
                placeholder="Enter current password"
                value={passwordData.currentPassword}
                onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                className={errors.currentPassword ? errorInputClass : inputClass}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('current')}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-all ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPasswords.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium mb-2" style={labelStyle}>
              New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.new ? 'text' : 'password'}
                placeholder="Enter new password"
                value={passwordData.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                className={errors.newPassword ? errorInputClass : inputClass}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('new')}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-all ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2" style={labelStyle}>
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                placeholder="Confirm new password"
                value={passwordData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className={errors.confirmPassword ? errorInputClass : inputClass}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-all ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className="bg-[#C18D21] cursor-pointer hover:bg-[#a67c1e] text-white text-sm px-6 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
            >
              <Save size={16} /> Save Changes
            </button>
            <button
              onClick={handleCancel}
              className={`text-sm px-6 cursor-pointer py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm ${
                darkMode 
                  ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}