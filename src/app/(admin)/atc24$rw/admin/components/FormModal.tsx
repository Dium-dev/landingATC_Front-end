"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReviewFormModal } from "@/store/useReviewFormModal";
import { ReviewForm } from "./ReviewForm";

export const FormModal = () => {
  const { isOpen, onClose, defaultValues } = useReviewFormModal();

  const title = !defaultValues?.id ? "Añadir reseña" : "Editar reseña";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-full md:h-auto overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ReviewForm review={defaultValues} />
      </DialogContent>
    </Dialog>
  );
};
