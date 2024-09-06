"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Review } from "@/types";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useReviewFormModal } from "@/store/useReviewFormModal";
import { deleteReview, updateReview } from "@/actions/reviews";
import { DeleteAlert } from "./DeleteAlert";
import { toast } from "sonner";
import { FormEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { REVIEWS_API } from "@/lib/constants";
import { cn, createFormData } from "@/lib/utils";
import useMobile from "@/hooks/useMobile";

interface ReviewsTableProps {
  reviews: Review[];
}

export const ReviewsTable = ({ reviews }: ReviewsTableProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { isMobile } = useMobile();
  const { onOpen } = useReviewFormModal();

  const handleDelele = (id: string) => {
    if (isPending) return;
    if (reviews.length === 5) {
      return toast.error("El número mínimo de reseñas es 5");
    }
    const token = sessionStorage.getItem("token") || "";
    startTransition(() => {
      deleteReview(id, token)
        .then((data) => {
          if (data.success) {
            toast.success(data.success);
          }
          if (data.error) {
            toast.error(data.error);
            // router.push("/atc24$rw");
          }
        })
        .catch(() => toast.error("Ocurrió un error al eliminar la reseña"));
    });
  };
  const handleSwitchChange = (value: boolean, review: Review) => {
    const activeReviews = reviews.filter((review) => JSON.parse(review.active));
    if (activeReviews.length === 5 && !value) {
      return toast.error("El número mínimo de reseñas activadas es 5");
    };

    if (isPending) return;
    const token = sessionStorage.getItem("token") || "";
    const formData: FormData = createFormData({
      ...review,
      active: String(value),
      file: new File([], "null", {
        type: "image/png",
      }),
    });
    startTransition(() => {
      updateReview(formData, token)
        .then((data) => {
          if (data.success) {
            toast.success(`Reseña ${value ? "activada" : "desactivada"} exitosamente`);
          }
          if (data.error) {
            toast.error(data.error);
          }
        })
        .catch(() => toast.error("Ocurrió un error al eliminar la reseña"));
    });
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center md:text-left md:w-72">USUARIO</TableHead>
            <TableHead>TEXTO</TableHead>
            <TableHead className="md:w-36 text-center">{isMobile ? "⭐️" : "CALIFICACIÓN"}</TableHead>
            <TableHead className="md:w-36 text-center">ESTADO</TableHead>
            <TableHead className="md:w-36 text-center">EDITAR</TableHead>
            <TableHead className="md:w-36 text-center">
              ELIMINAR
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id} className={cn(
              JSON.parse(review.active) == false ? "opacity-50" : ""
            )}>
              <TableCell>
                <div className="flex flex-col md:flex-row items-center gap-x-3">
                  <Image
                    src={`${REVIEWS_API}/images/reviews/${review.image}`}
                    className="rounded-full aspect-square object-cover"
                    width={isMobile ? 40 : 70}
                    height={isMobile ? 40 : 70}
                    alt="Imagen del usuario"
                  />
                  <span className="font-bold text-center">{review.user}</span>
                </div>
              </TableCell>
              <TableCell className="max-w-[5rem] md:max-w-[15rem] truncate">
                {review.review}
              </TableCell>
              <TableCell className="text-center">{review.rating}</TableCell>
              <TableCell className="text-center">
                <Switch
                  defaultChecked={
                    JSON.parse(review.active || "false") ? true : false
                  }
                  checked={JSON.parse(review.active)}
                  onCheckedChange={(event) =>
                    handleSwitchChange(event.valueOf(), review)
                  }
                  disabled={isPending}
                />
              </TableCell>
              <TableCell className="text-center">
                <CiEdit
                  size={25}
                  onClick={() => onOpen(review)}
                  className="cursor-pointer mx-auto"
                />
              </TableCell>
              <TableCell className="text-center">
                <DeleteAlert onDelete={() => handleDelele(review.id)}>
                  <CiTrash
                    size={25}
                    className="cursor-pointer hover:scale-125 text-red-600 mx-auto transition-all"
                  />
                </DeleteAlert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={() => onOpen()} className="my-5">
        Crear nueva reseña
      </Button>
    </>
  );
};
