// stores/useAuthStore.ts
import { create } from 'zustand';
import authenticationServices, { type LoginFormData, type SignupFormData } from '../Services/AuthenticationServices';
import { toast } from 'react-hot-toast';

type AuthState = {
  token: string;
  refreshToken: string;
  loading:boolean;
  isLogin: boolean;
  setTokens: (token: string, refreshToken: string) => void;
  clearTokens: () => void;
  signUp: (signUpData: SignupFormData) => Promise<void>;
  Login: (loginData: LoginFormData) => Promise<void>;
  getCSRFToken: () => Promise<void>;

};

export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  refreshToken: '',
  isLogin: false,
  loading:false,
  setTokens: (token, refreshToken) =>
    set(() => ({ token, refreshToken })),

  clearTokens: () => set(() => ({ token: '', refreshToken: '' })),

  signUp: async (signUpData: SignupFormData) => {
    try {
      set({loading:true});
      const response = await authenticationServices.SignUp(signUpData);
      console.log("response of signup", response);
      const { token, refreshToken } = response;
      set({ token, refreshToken });
      set({loading:false});
      console.log('Signup successful:', token);
      toast.success("Signup successful!");
      toast.success("Check your email for verification instructions.");
      // set({isLogin:true});
    } catch (error) {
      console.error('Signup failed:', error);
      set({loading:false});
      toast.error("Signup failed. Please try again.");
    }
  },
  Login: async (loginData: LoginFormData) => {
    try {
      set({loading:true});
      const response = await authenticationServices.Login(loginData);
      console.log("response of login", response);

      const { token, refreshToken } = response;
      set({ token, refreshToken });
      set({loading:false});
      console.log('Login successful:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },

  getCSRFToken: async () => {
    try {
      const csrfToken = await authenticationServices.getCsrfToken();
      // console.log('CSRF Token:', csrfToken);
      return csrfToken;
    } catch (error) {
      console.error('Failed to get CSRF token:', error);
      throw error; 
    }
  },

}));
