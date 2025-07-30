import { create } from 'zustand';

export type ViewType = 'chat' | 'profile';

interface ViewState {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  toggleView: () => void;
}

export const useViewStore = create<ViewState>((set) => ({
  currentView: 'chat',
  
  setView: (view: ViewType) => set({ currentView: view }),
  
  toggleView: () => set((state) => ({
    currentView: state.currentView === 'chat' ? 'profile' : 'chat'
  })),
}));