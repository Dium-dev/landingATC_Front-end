"use server";

export const getReviews = async () => {
  try {
    const response = await fetch("http://localhost:3005/reviews");
    const { data } = await response.json();
    return data;
  } catch (_) {
    return [];
  }
};
