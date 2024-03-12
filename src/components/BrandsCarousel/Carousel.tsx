"use client";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import { BrandCard } from "./BrandCard";
import { NextButton } from "./NextButton";

import { PreviousButton } from "./PreviousButton";
import { Brand } from "@/types";

interface CarouselProps {
  brands: Brand[];
}

type Direction = "left" | "right";

export const Carousel = ({ brands }: CarouselProps) => {
  const [direction, setDirection] = useState<Direction>();

  return (
    <div className="flex items-center justify-between gap-x-1 ms:gap-x-2 px-4 group">
      <PreviousButton onClick={() => setDirection("left")} />
      <Marquee direction={direction} pauseOnHover speed={40}>
        {brands.map((brand, i) => (
          <BrandCard brand={brand} key={i} />
        ))}
      </Marquee>
      <NextButton onClick={() => setDirection("right")} />
    </div>
  );
};
