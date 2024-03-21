import Image from "next/image";
import Link from "next/link";

export const AboutUsBanner = () => {
  return (
    <section className="flex items-center justify-evenly w-full py-7 ms:py-12 gap-x-12 px-3 xs:px-8 md:px-4 lg:px-0 max-w-f-hd mx-auto">
      <div className="md:w-1/4 lg:w-1/3 space-y-2 ms:space-y-6 h-min">
        <div className="flex justify-between items-center gap-x-6">
          <Link href={"about"}>
            <h2 className="text-2xl xs:text-4xl ms:text-5xl text-primary-lm font-bold hover:underline">
              Quienes somos
            </h2>
          </Link>
          <Link href={"about"} className="hover:scale-125 transition">
            <Image
              src={"/images/roundLogo.webp"}
              alt="Logo ATC"
              width={85}
              height={85}
              className="md:hidden"
            />
          </Link>
        </div>
        <p className="text-sm xs:text-lg ms:text-xl md:text-base lg:text-2xl ml-4 ms:ml-10 md:ml-2 lg:ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut
          aperiam quasi, id perferendis error nesciunt architecto ipsa magni
          alias eveniet consequatur totam illo fuga ad explicabo, aspernatur
          vero doloribus. Incidunt cum exercitationem unde pariatur ipsa
          consectetur non fugiat ipsum iusto enim culpa soluta quod, odio
          debitis sit et molestias est praesentium dolorum rem ipsam obcaecati
          veniam. Impedit, quia qui! Illum delectus repellendus eum hic
          recusandae neque rem commodi dolores suscipit soluta, expedita libero,
          voluptatem sunt qui quidem quaerat.{" "}
          <Link href={"about"}>
            <span className="text-primary-lm font-bold hover:underline">
              Leer más...
            </span>
          </Link>
        </p>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/images/aboutUS00.webp"}
          alt="Empleados"
          width={650}
          height={650}
        />
        <Link href={"about"}>
          <Image
            src={"/images/roundLogo.webp"}
            alt="Logo ATC"
            width={180}
            height={180}
            className="absolute -left-20 -bottom-6 hover:scale-125 transition"
          />
        </Link>
      </div>
    </section>
  );
};
