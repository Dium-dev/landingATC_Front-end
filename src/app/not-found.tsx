import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen gap-9 p-12">
      <h1 className="text-center text-2xl">
        La pagina que estas buscando no parece existir
      </h1>
      <div>
        <h1 className="text-center font-medium text-secondary-lm text-4xl mb-2">
          ERROR
        </h1>
        <Image
          src="/images/notFound.webp"
          alt="404"
          width={800}
          height={800}
          className="object-cover mb-8"
        />
      </div>
      <Link href="/">
        <button className="bg-primary-lm rounded py-2 px-4 text-white uppercase font-extrabold">
          Ir a página principal
        </button>
      </Link>
    </section>
  );
};
export default NotFoundPage;
