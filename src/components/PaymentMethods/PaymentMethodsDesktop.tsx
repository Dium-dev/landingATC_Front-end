import { PAYMENT_METHODS } from "@/lib/constants";
import { InfoCard } from "./InfoCard";

export const PaymentMethodsDesktop = () => {
  return (
    <>
      {PAYMENT_METHODS.map((item) => (
        <InfoCard
          title={item.title}
          description={item.description}
          img={item.img}
          key={item.title}
        />
      ))}
    </>
  );
};
