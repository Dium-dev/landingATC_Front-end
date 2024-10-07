import { create } from "zustand";

interface Store {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSupportDialogStore = create<Store>((set) => ({
  open: false,
  onOpen: () => {
    set((store) => ({
      ...store,
      open: true,
    }));
  },
  onClose: () => {
    set((store) => ({
      ...store,
      open: false,
    }));
  },
}));
