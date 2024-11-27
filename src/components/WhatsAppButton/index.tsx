import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";

export const WhatsAppButton = () => {
  return (
    <div className="w-20 h-20 rounded-full bg-[#25D366] fixed z-10 bottom-10 right-10 flex items-center justify-center cursor-pointer hover:scale-125 transition-all">
      <Link href={'https://wa.link/1rpg2h'} className="text-white" target="_blank">
        <MdOutlineWhatsapp size={55} />
      </Link>
    </div>
  );
};
