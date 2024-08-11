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
import Image from "next/image";
import { Review } from "@/types";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useReviewFormModal } from "@/store/useReviewFormModal";
import { deleteReview } from "@/actions/reviews";
import { DeleteAlert } from "./DeleteAlert";
import { toast } from "sonner";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { REVIEWS_API } from "@/lib/constants";

interface ReviewsTableProps {
  reviews: Review[];
}

export const ReviewsTable = ({ reviews }: ReviewsTableProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
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

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen del usuario</TableHead>
            <TableHead>Texto</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Editar</TableHead>
            <TableHead className="flex items-center justify-end">
              Eliminar
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>
                <Image src={`${REVIEWS_API}/images/reviews/${review.image}`} className="rounded-full aspect-square object-cover" width={100} height={100} alt="Imagen del usuario" />
              </TableCell>
              <TableCell className="max-w-[15rem] pr-6">{review.review}</TableCell>
              <TableCell>{review.rating}</TableCell>
              <TableCell>{review.user}</TableCell>
              <TableCell>
                <CiEdit
                  size={25}
                  onClick={() => onOpen(review)}
                  className="cursor-pointer"
                />
              </TableCell>
              <TableCell>
                <DeleteAlert onDelete={() => handleDelele(review.id)}>
                  <CiTrash size={25} className="cursor-pointer hover:text-red-500" />
                </DeleteAlert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={() => onOpen()} className="my-6">Crear reseña</Button>
    </>
  );
};
