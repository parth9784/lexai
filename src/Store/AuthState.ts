// stores/useAuthStore.ts
import { create } from 'zustand';
import authenticationServices, { type SignupFormData } from '../Services/AuthenticationServices';

type AuthState = {
  token: string;
  refreshToken: string;
  setTokens: (token: string, refreshToken: string) => void;
  clearTokens: () => void;
  signUp: (signUpData: SignupFormData) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  refreshToken: '',
  setTokens: (token, refreshToken) =>
    set(() => ({ token, refreshToken })),

  clearTokens: () => set(() => ({ token: '', refreshToken: '' })),

  signUp: async (signUpData: SignupFormData) => {
    try {
      const response = await authenticationServices.SignUp(signUpData);
      
      const { token, refreshToken } = response;
      set({ token, refreshToken });

      console.log('Signup successful:', token);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  },
  
}));
