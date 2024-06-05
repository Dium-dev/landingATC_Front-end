"use server";

import { REVIEWS_API } from "@/lib/constants";
import { reviewSchema } from "@/app/(admin)/atc24$rw/admin/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { Review } from "@/types";

export const getReviews = async (): Promise<Review[]> => {
  try {
    const response = await fetch(`${REVIEWS_API}/reviews`);
    const { data } = await response.json();
    return data ?? [];
  } catch (_) {
    return [];
  }
};
export const createReview = async (
  review: z.infer<typeof reviewSchema>,
  image: File,
  token: string
) => {
  const newReview = {
    review: review.review,
    rating: String(review.rating),
    user: review.user,
    date: new Date(),
  };

  const response = await fetch(`${REVIEWS_API}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newReview),
  });
  if (!response.ok) {
    return {
      error: "Su sesión ha expirado, ingrese nuevamente",
    };
  }

  revalidatePath("atc24$rw/admin");
  revalidatePath("/");
  return {
    success: "Se creó una nueva reseña",
  };
};
export const deleteReview = async (id: string, token: string) => {
  const response = await fetch(`${REVIEWS_API}/reviews/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return {
      error: "Su sesión ha expirado, ingrese nuevamente",
    };
  }
  revalidatePath("atc24$rw/admin");
  revalidatePath("/");
  return {
    success: "Se eliminó la reseña",
  };
};
export const updateReview = async (updatedReview: Review, token: string) => {
  const response = await fetch(`${REVIEWS_API}/reviews`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedReview),
  });
  if (!response.ok) {
    return {
      error: "Su sesión ha expirado, ingrese nuevamente",
    };
  }

  revalidatePath("atc24$rw/admin");
  revalidatePath("/");

  return {
    success: "Se ha actualizado la reseña",
  };
};
