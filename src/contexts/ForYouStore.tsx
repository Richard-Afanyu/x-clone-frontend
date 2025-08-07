import { create } from "zustand";

type ForYouType = {
  current: string;
  setCurrent: (text: string) => void;
};

export const useForYouStore = create<ForYouType>((set) => ({
  current: "for-you",
  setCurrent: (text) => {
    set((state) => ({ current: text }));
  },
}));
