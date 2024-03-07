import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <section className="w-full bg-black">
      <Link
        href={"https://actualizatucarro.blogspot.com"}
        className="bg-cover bg-center bg-no-repeat bg-fixed bg-banner flex items-center justify-center max-w-[1920px] mx-auto p-10"
        target="_blank"
      >
        <span className="text-9xl text-white">BLOG</span>
      </Link>
    </section>
  );
};
export default Blog;
