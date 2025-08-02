import { useState } from 'react';
import {
  User, Phone, Mail, MapPin, Home, Globe, Landmark, FileText,
  BadgePercent, Building2, Save, X, Edit
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useThemeStore } from '../Store/ThemeStore';
import { useProfileStore } from '../Store/ProfileState';
import { useAuthStore } from '../Store/AuthState';

interface UserData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  advocateCode: string;
  district: string;
  city: string;
  state: string;
  country: string;
  practicingCourt: string;
  pincode: string;
  bio: string;
}

export default function PersonalInformation() {
  const { darkMode } = useThemeStore();
  const { profileData, updateProfile } = useProfileStore();
  const { email } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    firstName: profileData?.first_name || '',
    lastName: profileData?.last_name || '',
    mobile: profileData?.mobile_number || '',
    email: email || '',
    advocateCode: profileData?.advocate_code || '',
    district: profileData?.district || '',
    city: profileData?.city || '',
    state: profileData?.state || '',
    country: profileData?.country || '',
    practicingCourt: profileData?.practicing_court || '',
    pincode: profileData?.pincode || '',
    bio: profileData?.bio || ''
  });

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      console.log('Saving user data:', userData);

      // Map the userData to the correct format expected by updateProfile
      const profileUpdateData = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        bio: userData.bio,
        mobile_number: userData.mobile,
        profession: profileData?.profession || '', // Keep existing profession or default to empty
        advocate_code: userData.advocateCode,
        city: userData.city,
        district: userData.district,
        state: userData.state,
        country: userData.country,
        pincode: userData.pincode,
        practicing_court: userData.practicingCourt,
      };

      await updateProfile(profileUpdateData);
      
      setIsEditing(false);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile. Please try again.');
      console.error('Error saving profile:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Theme-based styling
  const containerStyle = {
    backgroundColor: darkMode ? '#111827' : '#ffffff',
    borderColor: darkMode ? '#2c2f36' : '#e5e7eb'
  };

  const headerStyle = {
    backgroundColor: darkMode ? '#1e3a8a' : '#2563eb',
    color: '#ffffff'
  };

  const inputClass = `w-full px-4 py-2 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C18D21]/20 ${
    darkMode 
      ? 'bg-[#0f172a] text-white border-[#334155] placeholder:text-slate-400 focus:border-[#C18D21]' 
      : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-500 focus:border-[#C18D21]'
  }`;

  const readOnlyClass = `w-full px-4 py-2 rounded-lg border text-sm cursor-not-allowed ${
    darkMode 
      ? 'bg-[#1e293b] text-slate-400 border-[#334155]' 
      : 'bg-gray-50 text-gray-500 border-gray-200'
  }`;

  const labelStyle = {
    color: darkMode ? '#cbd5e1' : '#374151'
  };

  const noteStyle = {
    color: darkMode ? '#64748b' : '#9ca3af'
  };

  return (
    <div 
      className="rounded-2xl overflow-hidden shadow-lg border"
      style={containerStyle}
    >
      {/* Header */}
      <div 
        className="flex justify-between items-center px-6 py-4"
        style={headerStyle}
      >
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg">
            <User size={20} /> Personal Information
          </div>
          <div className="text-sm opacity-90">Manage your profile details</div>
        </div>
        
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-[#C18D21] cursor-pointer hover:bg-[#a67c1e] text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <Save size={16} /> Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <X size={16} /> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#C18D21] cursor-pointer hover:bg-[#a67c1e] text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
            >
              <Edit size={16} /> Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Field
          icon={<User size={16} />}
          label="First name"
          value={userData.firstName}
          onChange={(value) => handleInputChange('firstName', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<User size={16} />}
          label="Last name"
          value={userData.lastName}
          onChange={(value) => handleInputChange('lastName', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<Phone size={16} />}
          label="Mobile"
          value={userData.mobile}
          readOnly={true}
          inputClass={readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
          note="Cannot be changed"
        />
        
        <Field
          icon={<Mail size={16} />}
          label="Email"
          value={userData.email}
          readOnly={true}
          inputClass={readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
          note="Cannot be changed"
        />
        
        <Field
          icon={<BadgePercent size={16} />}
          label="Advocate code"
          value={userData.advocateCode}
          placeholder="Enter advocate code"
          onChange={(value) => handleInputChange('advocateCode', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<Building2 size={16} />}
          label="District"
          value={userData.district}
          placeholder="Enter district"
          onChange={(value) => handleInputChange('district', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<MapPin size={16} />}
          label="City"
          value={userData.city}
          placeholder="Enter city"
          onChange={(value) => handleInputChange('city', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<Home size={16} />}
          label="State"
          value={userData.state}
          placeholder="Enter state"
          onChange={(value) => handleInputChange('state', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<Globe size={16} />}
          label="Country"
          value={userData.country}
          placeholder="Enter country"
          onChange={(value) => handleInputChange('country', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<Landmark size={16} />}
          label="Practicing court"
          value={userData.practicingCourt}
          placeholder="Enter practicing court"
          onChange={(value) => handleInputChange('practicingCourt', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        <Field
          icon={<MapPin size={16} />}
          label="Pincode"
          value={userData.pincode}
          placeholder="Enter pincode"
          onChange={(value) => handleInputChange('pincode', value)}
          readOnly={!isEditing}
          inputClass={isEditing ? inputClass : readOnlyClass}
          labelStyle={labelStyle}
          noteStyle={noteStyle}
        />
        
        {/* Bio Field */}
        <div className="col-span-full">
          <label className="flex gap-2 text-sm mb-2 font-medium" style={labelStyle}>
            <FileText size={16} /> Bio 
            <span style={noteStyle} className="text-xs font-normal">(Optional)</span>
          </label>
          <textarea
            placeholder="Tell us about yourself..."
            value={userData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            readOnly={!isEditing}
            className={isEditing ? inputClass : readOnlyClass}
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}

interface FieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  readOnly: boolean;
  inputClass: string;
  labelStyle: React.CSSProperties;
  noteStyle: React.CSSProperties;
  note?: string;
}

function Field({ icon, label, value, placeholder, onChange, readOnly, inputClass, labelStyle, noteStyle, note }: FieldProps) {
  return (
    <div>
      <label className="flex gap-2 text-sm mb-2 font-medium" style={labelStyle}>
        {icon} {label}
        {note && <span style={noteStyle} className="text-xs font-normal">({note})</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        className={inputClass}
      />
    </div>
  );
}