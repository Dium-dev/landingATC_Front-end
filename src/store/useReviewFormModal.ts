import { Review } from "@/types";
import { create } from "zustand";

interface ReviewFormModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (values?: Review) => void;
  defaultValues?: Review
}

export const useReviewFormModal = create<ReviewFormModal>((set) => ({
  isOpen: false,
  onOpen: (values?: Review) => {
    set({
      isOpen: true,
      defaultValues: values
    })
  },
  onClose: () => {
    set({
      isOpen: false,
    });
  },
  defaultValues: {
    id: '',
    review: '',
    rating: '5',
    user: '',
    image: '',
    date: '',
    active: 'false'
  }
}));
