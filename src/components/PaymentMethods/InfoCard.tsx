import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  img: string;
}

export const InfoCard = ({ title, description, img }: InfoCardProps) => {
  return (
    <article className="w-full flex flex-col items-center gap-y-1">
      <Image src={img} width={85} height={85} alt={description} />
      <div className="flex flex-col items-center gap-y-1 flex-1">
        <h3 className="text-primary-lm font-bold text-lg ms:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="text-center w-4/5 text-base md:text-lg text-black/55">
          {description}
        </p>
      </div>
    </article>
  );
};
