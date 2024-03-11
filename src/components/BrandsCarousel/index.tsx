import { FC } from "react";

import { Carousel } from "./Carousel";
import { BRANDS } from "@/utils/constants";

const BrandsCarousel: FC = () => {

  return (
    <section className="max-w-f-hd mx-auto h-max">
      <Carousel brands={BRANDS}/>
    </section>
  );
};
export default BrandsCarousel;