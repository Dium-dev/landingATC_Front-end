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
    <nav className="flex items-center justify-between pt-8">
      <div className="flex items-start flex-col w-full">
        <div className="w-full flex items-center justify-between mb-6 px-8">
          <div className="flex items-center">
            <h1 className="text-primary-lm text-3xl font-rounded hidden lg:flex">
              Panel de
            </h1>
            <span className="flex ml-2">
              <Image
                src="/icons/logoActualizatucarroM.svg"
                width={60}
                height={60}
                alt="Logo"
              />
            </span>
            <h1 className="text-primary-lm text-3xl font-rounded hidden lg:flex">
              dministrador
            </h1>
          </div>

          <Hint
            label="Cerrar sesión"
            align="start"
            side="left"
            onClick={() => signOut()}
          >
            <RiCloseLine size={40} />
          </Hint>
        </div>
        <div className="bg-slate-500 w-full h-52 flex items-center justify-center lg:justify-between">
          <div className="h-full flex-shrink-0">
            <Image
              src="/images/dashboardReviewsL.webp"
              width={500}
              height={200}
              alt="Dashboard Left"
              className="h-full w-auto max-w-none object-cover md:object-contain"
            />
          </div>
          <div className="lg:flex-grow hidden lg:block" />
          <div className="h-full flex-shrink-0 hidden lg:block">
            <Image
              src="/images/dashboardReviewsR.webp"
              width={500}
              height={200}
              alt="Dashboard Right"
              className="h-full w-auto max-w-none object-cover md:object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
