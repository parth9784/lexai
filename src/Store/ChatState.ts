import { create } from 'zustand';
import chatService from '../Services/ChatService';


function parseStreamedData(rawText: string): string {
  // Split into lines
  const lines = rawText.split('\n');

  // Filter and clean `data:` lines
  const messages = lines
    .filter(line => line.startsWith('data:'))
    .map(line => line.replace('data:', '').trim());

  // Combine into one message
  return messages.join(' ').replace(/\\n/g, ' ').replace(/"/g, '').trim();

}



type ChatState = {
  currentSessionId: string | null;
  loading: boolean;
  error: string | null;
  setCurrentSessionId: (sessionId: string | null) => void;
  Chat: (prompt: string) => Promise<any>;
};


export const useChatStore = create<ChatState>((set) => ({
  currentSessionId: null,
  loading: false,
  error: null,

  setCurrentSessionId: (sessionId) => set({ currentSessionId: sessionId }),

  Chat: async (prompt) => {
    set({ loading: true, error: null });
    try {
      const response = await chatService.Chat(prompt);
      const chatResponse= parseStreamedData(response);
    //   set({ currentSessionId: sessionId, loading: false });
      return chatResponse;
    } catch (error: any) {
      set({ loading: false, error: error.message || "Chat request failed" });
    //   console.error("Error in chat service:", error);
      throw error;
    }
  },
}));
