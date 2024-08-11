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
export const createReview = async (formData: FormData, token: string) => {
  try {
    const response = await fetch(`${REVIEWS_API}/reviews`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    if (!response.ok && response.status == 401) {
      return {
        error: "Su sesión ha expirado, ingrese nuevamente",
      };
    }
    if (!response.ok) {
      return {
        error: data.message,
      };
    }
    revalidatePath("atc24$rw/admin");
    revalidatePath("/");
    return {
      success: "Se creó una nueva reseña",
    };
  } catch (error) {
    return {
      error: "Error al crear la reseña",
    };
  }
};
export const deleteReview = async (id: string, token: string) => {
  const response = await fetch(`${REVIEWS_API}/reviews/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok && response.status == 401) {
    return {
      error: "Su sesión ha expirado, ingrese nuevamente",
    };
  }
  if (!response.ok) {
    return {
      error: data.message,
    };
  }
  revalidatePath("atc24$rw/admin");
  revalidatePath("/");
  return {
    success: "Se eliminó la reseña",
  };
};
export const updateReview = async (formData: FormData, token: string) => {
  const response = await fetch(`${REVIEWS_API}/reviews`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await response.json();
  if (!response.ok && response.status == 401) {
    return {
      error: "Su sesión ha expirado, ingrese nuevamente",
    };
  }
  if (!response.ok) {
    return {
      error: data.message,
    };
  }

  revalidatePath("atc24$rw/admin");
  revalidatePath("/");

  return {
    success: "Se ha actualizado la reseña",
  };
};
