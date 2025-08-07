import { create } from "zustand";

interface ProfileSelectType {
  current: string;
  setCurrent: (title: string) => void;
}

export const useProfileSelectStore = create<ProfileSelectType>((set) => ({
  current: "posts",
  setCurrent: (title) => {
    set((state) => ({ current: title }));
  },
}));
