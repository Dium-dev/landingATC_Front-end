"use client";

import useMobile from "@/hooks/useMobile";

import { PaymentMethodsMobile } from "./PaymentMethodsMobile";
import { PaymentMethodsDesktop } from "./PaymentMethodsDesktop";

export const PaymentMethods = () => {
  const { isMobile } = useMobile();

  return (
    <section className="max-w-f-hd mx-auto p-4 ms:my-12 flex justify-start">
      {isMobile ? <PaymentMethodsMobile /> : <PaymentMethodsDesktop />}
    </section>
  );
};
