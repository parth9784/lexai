import axios from "axios";

export type SignupFormData = {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
};

export type LoginFormData={
    email:string,
    password:string,
}


const apiClient=axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL});

class AuthenticationServices{

    static getInstance(){
        return new AuthenticationServices();
    }

    async SignUp(SignUpData:SignupFormData){
        try{
            const response = await apiClient.post('/api/accounts/signup/',SignUpData);
            console.log("response of signup",response.data);
            return response.data;
        }
        catch(error){
            console.log("error in sign up",error);
        }
    }

    async Login(LoginData:LoginFormData){
        try{
            const response = await apiClient.post('/api/token',LoginData);
            console.log("response of login",response.data);
            return response.data;
        }
        catch(error){
            console.log("error in login",error);
        }
    }

    async RefreshToken(RefreshData:{refresh:string}){
        try{
            const response=await apiClient.post('/api/token/refresh',RefreshData);
            console.log("response of refresh token",response.data);
            return response.data;
        }
        catch(error:unknown){
            console.log("error in RefreshToken",error);

        }
    }




};

const authenticationServices = AuthenticationServices.getInstance();
export default authenticationServices;