import { cn } from "@/lib/utils";
import Image from "next/image";

interface HowToBuyItemProps {
  title: string;
  description: string;
  icon: string;
  background: string;
  direction: "left" | "right"
}

export const HowToBuyItem = ({
  title,
  description,
  icon,
  background,
  direction
}: HowToBuyItemProps) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full gap-y-6",
      direction === "left" && "lg:flex-row-reverse"
    )}>
      <Image src={icon} width={200} height={200} alt={title} />
      <div className="w-1/2 text-center lg:text-start space-y-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};