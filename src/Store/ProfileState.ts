import { create } from 'zustand';
import profileService from '../Services/ProfileServices';

interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  mobile_number: string;
  advocate_code: string;
  bio: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  practicing_court: string;
  profession: string;
}

interface UserProfileData {
  first_name: string;
  last_name: string;
  bio: string;
  mobile_number: string;
  profession: string;
  advocate_code: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  practicing_court: string;
}

interface ProfileState {
    profileData: UserProfile | null;
    loading: boolean;
    getProfile: () => Promise<UserProfile>;
    updateProfile: (profileData: UserProfileData) => Promise<UserProfile>;
    changePassword: (passwordData: { old_password: string; new_password: string; confirm_password: string }) => Promise<unknown>;
}

export const useProfileStore = create<ProfileState>((set) => ({
    profileData: null,
    loading: false,
    
    getProfile: async () => {
        try {
            set({ loading: true });
            const profile = await profileService.getProfile();
            set({ profileData: profile, loading: false });
            return profile;
        } catch (error) {
            set({ loading: false });
            console.error('Error fetching profile:', error);
            throw error;
        }
    },
    
    changePassword: async (passwordData: { old_password: string; new_password: string; confirm_password: string }) => {
        try {
            const response = await profileService.ChangePassword(passwordData);
            console.log("response of change password", response);
            return response;
        } catch (error) {
            console.error('Error changing password:', error);
            throw error;
        }
    },

    updateProfile: async (profileData: UserProfileData) => {
        try {
            set({ loading: true });
            const updatedProfile = await profileService.updateProfile(profileData);
            set({ profileData: updatedProfile, loading: false });
            return updatedProfile;
        } catch (error) {
            set({ loading: false });
            console.error('Error updating profile:', error);
            throw error;
        }
    }
}));