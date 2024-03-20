import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <Link href={"https://actualizatucarro.mercadoshops.com.co/"}>
      <div className="flex flex-col items-center justify-center gap-x-4 relative group">
        <Image src={image} width={150} height={150} alt={name} className="group-hover:scale-125 transition-all aspect-square" />
        <span className="font-bold text-xs ms:text-sm md:text-lg ms:group-hover:text-xl transition-all">{name}</span>
        <div className="absolute h-1 bg-primary-lm bottom-[-5px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out w-full rounded"></div>
      </div>
    </Link>
  );
};
export default CategoryCard;
