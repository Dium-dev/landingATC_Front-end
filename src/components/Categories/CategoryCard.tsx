import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 relative group">
      <Link href={"https://actualizatucarro.mercadoshops.com.co/"}>
        <Image src={image} width={150} height={150} alt={name} />
        <span className="font-bold text-sm md:text-lg">{name}</span>
        <div className="absolute h-1 bg-primary-lm bottom-[-5px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out w-full rounded"></div>
      </Link>
    </div>
  );
};
export default CategoryCard;
