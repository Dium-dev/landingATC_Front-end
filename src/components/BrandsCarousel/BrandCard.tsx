import { Brand } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Link
      className="flex items-center justify-center cursor-pointer w-max ms:m-6 mx-1 hover:scale-125 transition-all"
      href={"https://shop.actualizatucarro.com/"}
      target="_blank"
    >
      <Image
        src={brand.image}
        width={100}
        height={100}
        alt={brand.name}
        className="w-auto h-auto"
      />
    </Link>
  );
};
