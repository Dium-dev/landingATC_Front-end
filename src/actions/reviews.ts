"use server";

import { REVIEWS_API } from "@/lib/constants";

export const getReviews = async () => {
  try {
    const response = await fetch(REVIEWS_API);
    const { data } = await response.json();
    return data;
  } catch (_) {
    return [];
  }
};
