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


interface ProfileState {
    profileData: UserProfile | null;
    getProfile: () => Promise<unknown>;
    changePassword: (passwordData: { old_password: string; new_password: string; confirm_password: string }) => Promise<unknown>;
}

export const useProfileStore = create<ProfileState>((set) => ({
    profileData: null,
    getProfile: async () => {
        const profile = await profileService.getProfile();
        set({ profileData: profile });
        return profile;
    },
    changePassword: async (passwordData: { old_password: string; new_password: string; confirm_password: string }) => {
        const response= await profileService.ChangePassword(passwordData);
        console.log("response of change password", response);
    }

}));