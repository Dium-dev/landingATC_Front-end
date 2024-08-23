"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useReviewFormModal } from "@/store/useReviewFormModal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "../schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { createReview, updateReview } from "@/actions/reviews";
import { Review } from "@/types";
import { Button } from "@/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { REVIEWS_API } from "@/lib/constants";
import { createFormData } from "@/lib/utils";

interface ReviewFormProps {
  review?: Review;
}

export const ReviewForm = ({ review }: ReviewFormProps) => {
  const [isPending, startTransition] = useTransition();
  const { onClose } = useReviewFormModal();
  const router = useRouter();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple: false,
      onDropRejected: () => {
        toast.error("Archivo inválido");
      },
    });

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      review: review?.review || "",
      rating: review?.rating || "5",
      user: review?.user || "",
      active: review?.active || "false",
      date: review?.date || new Date().toISOString(),
    },
  });

  const handleCreate = (
    values: z.infer<typeof reviewSchema>,
    token: string
  ) => {
    const formData: FormData = createFormData({
      ...values,
      file: acceptedFiles[0],
    });
    startTransition(() => {
      createReview(formData, token)
        .then((data) => {
          if (data.success) {
            toast.success(data.success);
            onClose();
          }
          if (data.error) {
            toast.error(data.error);
            // router.push("/atc24$rw");
          }
        })
        .catch(() => toast.error("Ocurrió un error"));
    });
  };

  const handleUpdate = (review: Review, token: string) => {
    const formData: FormData = createFormData({
      ...review,
      file: acceptedFiles[0] || new File([], "null", {
        type: "image/png",
      })
    });
    startTransition(() => {
      updateReview(formData, token)
        .then((data) => {
          if (data.success) {
            toast.success(data.success);
            onClose();
          }
          if (data.error) {
            toast.error(data.error);
            // router.push("/atc24$rw");
          }
        })
        .catch(() => toast.error("Ocurrió un error"));
    });
  };

  const onSubmit = (values: z.infer<typeof reviewSchema>) => {
    const token = sessionStorage.getItem("token") || "";
    if (!review) {
      handleCreate(values, token);
    } else {
      const updatedReview = {
        id: review.id,
        image: acceptedFiles[0],
        ...values,
      };

      handleUpdate(updatedReview, token);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8 flex flex-col items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-bold">Texto</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Texto de la reseña"
                  className="max-w-full h-[150px] resize-none"
                  maxLength={600}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Calificación</FormLabel>
              <FormControl>
                <Input type="number" max={5} min={1} {...field} step={0.5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombre del usuario</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del usuario" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div
          {...getRootProps()}
          className="w-full p-4 shadow-sm text-sm text-muted-foreground rounded-md border border-input bg-transparent flex flex-col items-center justify-center"
        >
          <Input type="file" {...getInputProps()} />
          {review?.image && !acceptedFiles[0] ? (
            <Image
              src={`${REVIEWS_API}/images/reviews/${review.image}`}
              width={150}
              height={150}
              className="aspect-square object-cover"
              alt="Imagen del usuario"
            />
          ) : acceptedFiles[0] ? (
            <Image
              src={URL.createObjectURL(acceptedFiles[0])}
              width={150}
              height={150}
              className="aspect-square object-cover"
              alt="Imagen del usuario"
            />
          ) : isDragActive ? (
            <div className="flex flex-col gap-y-0.5 items-center">
              <FiUploadCloud className="animate-bounce" size={50} />
              <p>Suelta la imagen</p>
            </div>
          ) : (
            <div className="flex flex-col gap-y-0.5 items-center">
              <FiUploadCloud size={50} />
              <p>Carga la imagen del usuario, arrastra o haz click</p>
            </div>
          )}
        </div>
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem className="w-full flex items-center">
              <FormControl>
                <div className="flex items-center gap-x-2">
                  <Input
                    {...field}
                    type="checkbox"
                    id="show"
                    className="w-5 h-5"
                    checked={JSON.parse(field.value)}
                  />
                  <label
                    htmlFor="show"
                    className="text-sm h-5 flex items-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mostrar en pantalla
                  </label>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-primary-lm hover:bg-red-600 dark:text-white"
          disabled={isPending}
        >
          {!isPending ? (
            review ? (
              "Actualizar reseña"
            ) : (
              "Registrar reseña"
            )
          ) : (
            <ImSpinner2 size={20} className="animate-spin h-5 w-5" />
          )}
        </Button>
      </form>
    </Form>
  );
};
