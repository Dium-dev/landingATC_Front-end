import { FC } from "react";

import { Carousel } from "./Carousel";
import { BRANDS } from "@/lib/constants";

const BrandsCarousel: FC = () => {

  return (
    <section className="max-w-f-hd mx-auto mb-4 h-max">
      <Carousel brands={BRANDS}/>
    </section>
  );
};
export default BrandsCarousel;