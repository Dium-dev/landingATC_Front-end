"use client";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <section className="w-full bg-black">
      <Link
        className="bg-cover bg-center bg-no-repeat bg-fixed bg-banner flex items-center justify-center max-w-[1920px] mx-auto px-4 ms:px-0"
        href={"https://actualizatucarro.blogspot.com"}
        target="_blank"
      >
        <ReactSVG
          src="/icons/blogLogo.svg"
          beforeInjection={(svg) => {
            svg.classList.add("fil0");
          }}
        />
      </Link>
    </section>
  );
};
export default Blog;
