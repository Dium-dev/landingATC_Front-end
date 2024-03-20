"use client";
import { FC, useRef } from "react";
import useMobile from "@/hooks/useMobile";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Banner: FC = () => {
  const { isMobile } = useMobile();
  const images = [
    {
      original: `/images/banner1${isMobile ? "m" : "d"}.webp`,
    },
    {
      original: `/images/banner2${isMobile ? "m" : "d"}.webp`,
    },
  ];

  const slideRef = useRef<ImageGallery>(null);

  return (
    <section className="max-w-f-hd mx-auto relative group">
      <ImageGallery
        ref={slideRef}
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        slideInterval={4000}
        autoPlay
        renderLeftNav={(onClick, disabled) => (
          <button
            onClick={onClick}
            disabled={disabled}
            className="hover:text-primary-lm transition-all ease-linear duration-300 absolute top-[50%] translate-y-[-50%] bg-background-lm z-10 p-2 rounded-full invisible ms:group-hover:visible left-2 opacity-80"
          >
            <BsChevronCompactLeft size={31} />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            onClick={onClick}
            disabled={disabled}
            className="hover:text-primary-lm transition-all ease-linear duration-300 absolute top-[50%] translate-y-[-50%] bg-background-lm z-10 p-2 rounded-full invisible ms:group-hover:visible right-2 opacity-80"
          >
            <BsChevronCompactRight size={31} />
          </button>
        )}
        onClick={() => {
          if (slideRef.current?.getCurrentIndex() === 1) {
            window.open(
              "https://actualizatucarro.mercadoshops.com.co/",
              "_blank"
            );
          }
        }}
      />
    </section>
  );
};
export default Banner;
