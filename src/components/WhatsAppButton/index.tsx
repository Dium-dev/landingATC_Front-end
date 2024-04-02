import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";

export const WhatsAppButton = () => {
  return (
    <div className="w-20 h-20 rounded-full bg-[#25D366] fixed z-10 bottom-10 right-10 ms:flex items-center justify-center hidden cursor-pointer">
      <Link href={'#'} className="text-white">
        <MdOutlineWhatsapp size={55} />
      </Link>
    </div>
  );
};
