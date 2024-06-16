import { cn } from "@/lib/utils";
import Image from "next/image";

interface HowToBuyItemProps {
  title: string;
  description: string;
  icon: string;
  background: string;
}

export const HowToBuyItem = ({
  title,
  description,
  icon,
  background,
}: HowToBuyItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full gap-y-6">
      <Image src={icon} width={200} height={200} alt={title} />
      <div className="w-1/2 text-center lg:text-start">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
