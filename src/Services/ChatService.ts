import axios from "axios";
import { useChatStore } from "../Store/ChatState";


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



class ChatService {
  static getInstance() {
    return new ChatService();
  }

  async Chat(prompt: string) {
    try {
        let chatBody;
      const sessionId = useChatStore.getState().currentSessionId;
      if (sessionId) {
        chatBody = {
          session_id: sessionId,
          prompt: prompt
        };
      }  
      else{
        chatBody = {
          prompt: prompt
        };
      }
      const response:any = await axiosInstance.post("chat/chat/stream/",chatBody );
      useChatStore.getState().setCurrentSessionId(response.headers.get("x-session-id"));
      return response.data;
    } catch (error) {
      console.log("error in chat", error);
      throw error;
    }
  }

}

const chatService = ChatService.getInstance();
export default chatService;