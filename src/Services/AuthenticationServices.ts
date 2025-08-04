import axios from "axios";

export type SignupFormData = {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
};

export type LoginFormData={
    username:string,
    password:string,
}

export type ChangePasswordFormData = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};

export const getCookie = (name:string) => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  return cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;
};


const axiosInstance = axios.create({
  baseURL: "/api/", 
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "X-CSRFToken": getCookie("csrftoken") || "",
  },
});



class AuthenticationServices {
  static getInstance() {
    return new AuthenticationServices();
  }

  async SignUp(SignUpData: SignupFormData) {
    try {
      const response = await axiosInstance.post("accounts/signup/", SignUpData);
      console.log("response of signup", response.data);
      return response.data;
    } catch (error) {
      console.log("error in sign up", error);
      throw error;
    }
  }

  async Login(LoginData: LoginFormData) {
    try {
      const response = await axiosInstance.post("accounts/login/", LoginData);
      console.log("response of login", response.data);
      return response.data;
    } catch (error) {
      console.log("error in login", error);
      throw error;
    }
  }

  async LogOut() {
    try {
      const response = await axiosInstance.post("accounts/logout/");
      console.log("response of logout", response.data);
      return response.data;
    } catch (error) {
      console.log("error in logout", error);
    }
  }

  async getCsrfToken() {
    try {
      const response = await axiosInstance.get("accounts/csrf/");
      return response.data;
    } catch (error) {
      console.log("error in getCsrfToken", error);
      throw error;
    }
  }

  async forgotPassword(email: string) {
    try {
      const response = await axiosInstance.post("accounts/forgot-password/", { username:email });
      console.log("response of forgot password", response.data);
      return response.data;
    } catch (error) {
      console.log("error in forgot password", error);
    }
  }



  async changePassword(data: ChangePasswordFormData) {
    try {
      const response = await axiosInstance.post("accounts/profile/change-password/", data);
      console.log("response of change password", response.data);
      return response.data;
    } catch (error) {
      console.log("error in change password", error);
    }
  }

  async logout(){
    try {
      const response = await axiosInstance.post("accounts/logout/");
      console.log("response of logout", response.data);
      return response.data;
    } catch (error) {
      console.log("error in logout", error);
      throw error;
    }
  }

}

const authenticationServices = AuthenticationServices.getInstance();
export default authenticationServices;