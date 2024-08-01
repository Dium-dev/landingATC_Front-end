import { cn } from "@/lib/utils";
import Image from "next/image";

interface HowToBuyItemProps {
  title: string;
  description: string;
  background: string;
  direction: "left" | "right";
  icon: string;
}

export const HowToBuyItem = ({
  title,
  description,
  background,
  direction,
  icon,
}: HowToBuyItemProps) => {
  return (
    <div
      className={cn(
        `flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full gap-y-6 p-6`,
        direction === "left" && "lg:flex-row-reverse"
      )}
    >
      <div className="absolute -z-10 w-full h-full">
        <Image src={background} alt={title} fill className="object-cover" />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-start space-y-3 p-4 lg:p-7 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 rounded-xl">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <div className="rounded-full size-20 bg-primary-lm flex items-center justify-center">
            <Image
              src={icon}
              width={45}
              height={45}
              alt="Icon"
              className="drop-shadow-lg"
            />
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
        </div>
        <p className="lg:text-lg">{description}</p>
      </div>
    </div>
  );
};
