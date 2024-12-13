import { LiaHardHatSolid } from "react-icons/lia";
import { cn } from "@/lib/utils"

interface ConstructionCardProps {
  color: "red" | "green" | "yellow" | "purple"
  className?: string
  reverse?: boolean
}

export function AboutUsCard({ color, className, reverse = false }: ConstructionCardProps) {
  const colorClasses = {
    red: "bg-red-500 dark:bg-red-700",
    green: "bg-lime-500 dark:bg-lime-700",
    yellow: "bg-yellow-400 dark:bg-yellow-600",
    purple: "bg-purple-400 dark:bg-purple-600",
  }

  return (
    <div className={cn(
      "flex flex-col-reverse items-center justify-evenly gap-6 w-full mb-8",
      reverse ? "md:flex-row-reverse" : "md:flex-row",
      className
    )}>
      <div className="w-full md:w-2/5 space-y-4">
        <p className="text-paragraph text-gray-300 dark:text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse fuga, unde voluptas reprehenderit ut commodi! Officiis, magnam veritatis? Autem quid possimus accusamus sed et fugiat consectetur est officiis molestias.
        </p>
        <p className="text-paragraph text-gray-300 dark:text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse fuga, unde voluptas reprehenderit ut commodi! Officiis, magnam veritatis? Autem quid possimus accusamus sed et fugiat consectetur est officiis molestias.
        </p>
      </div>
      <div className={cn("flex h-60 w-full md:w-2/5 flex-shrink-0 items-center justify-center rounded-lg", colorClasses[color])}>
        <LiaHardHatSolid className="h-20 w-20 text-white" />
      </div>
    </div>
  )
}

