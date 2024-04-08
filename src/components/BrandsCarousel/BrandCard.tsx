import { Brand } from "@/types";
import Image from "next/image";
import Link from "next/link";
import useMobile from "@/hooks/useMobile";

interface BrandCardProps {
  brand: Brand;
}

export const BrandCard = ({ brand }: BrandCardProps) => {
  const { isMobile } = useMobile();

  return (
    <Link
      className="flex items-center justify-center cursor-pointer w-max ms:m-6 mx-1 hover:scale-125 transition-all"
      href={"https://shop.actualizatucarro.com/"}
      target="_blank"
    >
      <Image
        src={brand.image}
        width={isMobile ? 50 : 100}
        height={isMobile ? 50 : 100}
        alt={brand.name}
        className="w-auto h-auto"
      />
    </Link>
  );
};
