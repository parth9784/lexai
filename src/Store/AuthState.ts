// stores/useAuthStore.ts
import { create } from 'zustand';
import authenticationServices, { type LoginFormData, type SignupFormData } from '../Services/AuthenticationServices';

type AuthState = {
  token: string;
  refreshToken: string;
  loading:boolean;
  setTokens: (token: string, refreshToken: string) => void;
  clearTokens: () => void;
  signUp: (signUpData: SignupFormData) => Promise<void>;
  Login: (loginData: LoginFormData) => Promise<void>;

};

export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  refreshToken: '',
  loading:false,
  setTokens: (token, refreshToken) =>
    set(() => ({ token, refreshToken })),

  clearTokens: () => set(() => ({ token: '', refreshToken: '' })),

  signUp: async (signUpData: SignupFormData) => {
    try {
      set({loading:true});
      const response = await authenticationServices.SignUp(signUpData);
      
      const { token, refreshToken } = response;
      set({ token, refreshToken });
      set({loading:false});

      console.log('Signup successful:', token);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  },
  Login: async (loginData: LoginFormData) => {
    try {
      set({loading:true});
      const response = await authenticationServices.Login(loginData);
      
      // const { token, refreshToken } = response;
      // set({ token, refreshToken });
      set({loading:false});

      // console.log('Signup successful:', token);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  },

}));
