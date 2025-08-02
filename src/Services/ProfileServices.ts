import axios from "axios";


const getCookie = (name:string) => {
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

class ProfileService {
  static getInstance() {
    return new ProfileService();
  }

  async getProfile() {
    try {
      const response = await axiosInstance.get("accounts/profile/");
      console.log("response of get profile", response.data);
      return response.data;
    } catch (error) {
      console.log("error in getting profile", error);
      throw error;
    }
  }

  async ChangePassword(passwordData: { old_password: string; new_password: string; confirm_password: string }) {
    try {
      const response = await axiosInstance.post("accounts/profile/change-password/", passwordData);
      console.log("response of change password", response.data);
      return response.data;
    } catch (error) {
      console.log("error in changing password", error);
      throw error;
    }
  }
}

const profileService = ProfileService.getInstance();
export default profileService;