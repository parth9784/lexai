// src/Store/ThemeStore.ts
import { create } from "zustand";

type ThemeStore = {
  darkMode: boolean;
  toggleTheme: () => void;
  setTheme: (mode: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      const root = document.documentElement;
      root.classList.toggle("dark", newMode);
      return { darkMode: newMode };
    }),
  setTheme: (mode) => {
    localStorage.setItem("theme", mode ? "dark" : "light");
    const root = document.documentElement;
    root.classList.toggle("dark", mode);
    set({ darkMode: mode });
  },
}));
