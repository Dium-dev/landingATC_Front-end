"use client";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

import { BrandCard } from "./BrandCard";

import { Brand } from "@/types";

interface CarouselProps {
  brands: Brand[];
}

export const Carousel = ({ brands }: CarouselProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between gap-x-1 ms:gap-x-2 px-2 group">
      <Marquee
        direction={"left"}
        pauseOnHover
        speed={40}
        gradient
        gradientWidth={50}
        gradientColor={theme === "dark" ? "black" : "white"}
      >
        {brands.map((brand, i) => (
          <BrandCard brand={brand} key={i} />
        ))}
      </Marquee>
    </div>
  );
};
