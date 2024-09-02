"use client";

import { RiCloseLine } from "react-icons/ri";
import { Hint } from "@/components/Hint";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();

  const signOut = () => {
    sessionStorage.removeItem("token");
    return router.push("/atc24$rw");
  };

  return (
    <nav className="flex items-center justify-between px-8 pt-8">
      <div className="flex items-center">
        <h1 className="text-primary-lm text-3xl flex font-rounded">
          Panel de
          <span className="flex ml-2">
            <Image
              src="/icons/logoActualizatucarroM.svg"
              width={60}
              height={60}
              alt="Logo"
            />
            dministrador
          </span>
        </h1>
      </div>
      <Hint label="Cerrar sesión" align="start" side="left" onClick={() => signOut()}>
        <RiCloseLine size={40} />
      </Hint>
    </nav>
  );
};
