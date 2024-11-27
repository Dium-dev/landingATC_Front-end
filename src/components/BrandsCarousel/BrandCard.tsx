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
      className="flex items-center justify-center cursor-pointer size-36 ms:m-6 mx-1 hover:scale-125 transition-all relative"
      href={"https://shop.actualizatucarro.com/"}
      target="_blank"
    >
      <Image
        src={brand.image}
        fill
        alt={brand.name}
        className="size-full object-contain"
      />
    </Link>
  );
};
