// stores/useAuthStore.ts
import { create } from 'zustand';
import authenticationServices, { type LoginFormData, type SignupFormData } from '../Services/AuthenticationServices';
import { toast } from 'react-hot-toast';

type AuthState = {
  token: string;
  refreshToken: string;
  loading:boolean;
  isLogin: boolean;
  isAdmin: boolean;
  email: string;
  firstName: string;
  lastName: string;
  setTokens: (token: string, refreshToken: string) => void;
  clearTokens: () => void;
  signUp: (signUpData: SignupFormData) => Promise<void>;
  Login: (loginData: LoginFormData) => Promise<void>;
  getCSRFToken: () => Promise<void>;
  forgotPassword: (email:string) => Promise<void>;
  logout: () => Promise<void>;

};


export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  refreshToken: '',
  isLogin: false,
  isAdmin: false,
  email: 'parthdadhich458@gmail.com',
  firstName: 'Parth',
  lastName: '',
  loading: false,
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
  
      
      console.log('Signup successful:', token);
      toast.success("Signup successful!");
      toast.success("Check your email for verification instructions.");
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
      set({loading:false});
      // set({isLogin:true});
    } catch (error) {
      console.error('Signup failed:', error);
      toast.error("Signup failed. Please try again.");
      set({loading:false});
    }
  },
  Login: async (loginData: LoginFormData) => {
    try {
      set({loading:true});
      const response = await authenticationServices.Login(loginData);
      
      console.log("response of login", response);
      set({
        firstName: response.first_name,
        lastName: response.last_name,
        email: response.email,
        isAdmin: response.is_admin,
        isLogin: true,
      });

      
      toast.success("Login successful!");
      set({loading:false,});
     
      setTimeout(() => {
        window.location.href = "/chat";
      }, 500);
      

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

  forgotPassword: async (email: string) => {
    try {
      const response = await authenticationServices.forgotPassword(email);
      console.log("response of forgot password", response);
      toast.success("New Password sent to your email.");
      setTimeout(()=>{
         window.location.href = "/login";
      },500)
    } catch (error) {
      console.error('Forgot password failed:', error);
      toast.error("Failed to send new password. Please try again.");
    }
  },

  logout: async () => {
    try {
      const response = await authenticationServices.logout();
      console.log("response of logout", response);
      set({isLogin:false});
      return response;
    } catch (error) {
      console.log("error in logout", error);
      throw error;
    }
  }

}));
