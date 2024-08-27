"use server";

import { REVIEWS_API } from "@/lib/constants";

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${REVIEWS_API}/admin-users/logIn`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ thisUser: email, pass: password }),
      method: "POST",
    });
  
    const data = await response.json();
    
    if (!response.ok) {
      return {
        error: "Acceso no autorizado",
      };
    }
    return {
      token: data.access_token,
    };
  } catch (error) {
    return {
      error: "Error al intentar iniciar sesión, intente más tarde",
    }
  }
};
