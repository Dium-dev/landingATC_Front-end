"use server";

import { REVIEWS_API } from "@/lib/constants";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${REVIEWS_API}/admin-users/logIn`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ thisUser: email, pass: password }),
    method: "POST",
  });

  const data = await response.json();
  
  if (data.statusCode === 401) {
    return {
      error: "Acceso no autorizado",
    };
  }
  return {
    token: data.access_token,
  };
};
