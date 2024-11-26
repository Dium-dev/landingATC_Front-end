"use server";

export const sendSupportMessage = async ({
  email,
  message,
  name,
}: {
  email: string;
  message: string;
  name: string;
}) => {
  try {
    const response = await fetch(`${process.env.REVIEWS_API!}/support`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      return {
        error: "Error al enviar el mensaje, intente más tarde.",
      };
    }

    return {
      success: "Mensaje enviado con éxito",
    };
  } catch (error) {
    return {
      error: "Error al enviar el mensaje, intente más tarde.",
    };
  }
};
