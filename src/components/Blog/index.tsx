import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <section className='w-full bg-black'>
    <Link className="bg-cover bg-center bg-no-repeat bg-fixed bg-banner flex items-center justify-center max-w-[1920px] mx-auto" href={'https://actualizatucarro.blogspot.com'} target='_blank'>
      <Image
        src={'/images/blog.webp'}
        alt="Título del Blog"
        width={668}
        height={363}
        loading="lazy"
      />
    </Link>
    </section>
  );
};
export default Blog;
