import { Brand } from "@/utils/loadBrands";
import Image from "next/image";

interface BrandCardProps {
  brand: Brand
}

export const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <div className="flex items-center justify-center cursor-pointer w-max ms:m-6 mx-1 hover:scale-125 transition-all">
      <Image src={brand.image} width={100} height={100} alt={brand.name} />
    </div>
  );
};
