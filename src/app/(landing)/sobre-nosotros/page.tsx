import { AboutUsCard } from "@/components/AboutUsBanner/AboutUsCard";
import Image from "next/image";

const SobreNosotros = () => {
  return (
    <>
      <div className="mb-24 flex flex-col items-center justify-between gap-8 md:flex-row bg-black/90 dark:bg-white px-8 py-20 relative">
        <h1 className="text-4xl font-bold text-primary-lm mb-12 md:mb-0 md:ml-24">QUIENES SOMOS</h1>
        <div className="absolute inset-y-0 md:right-20 bottom-0 transform translate-y-1/2 mb-6 md:mb-0">
          <div className="flex h-full items-center justify-center">
            <Image
              src={"/icons/iconLogoATC.png"}
              alt="Logo ATC"
              width={200}
              height={200}
              className="shadow-2xl rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8">
        <AboutUsCard color="red" reverse />
        <AboutUsCard color="green" />
        <AboutUsCard color="yellow" reverse />
        <AboutUsCard color="purple" />
      </div>
    </>
  );
};
export default SobreNosotros;
