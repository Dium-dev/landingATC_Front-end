'use client'
import { Button } from '@/components/button'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { PiHeadsetFill } from "react-icons/pi";
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { ThemeModeButton } from '@/components/theme-mode'
export function NavBar() {
  const [open, setOpen] = useState(false)
  const handleOPen = () => setOpen((cur) => !cur)

  return (
    <nav className="text-text-lm sticky top-0 z-50 backdrop-blur-sm px-2 py-4 justify-between flex items-center bg-background-lm/70 dark:bg-background-dm/70 shadow-md">
      <MobileMenu
        buttonValue={<HiBars3 className="w-full h-full" />}
        open={open}
        handleOPen={handleOPen}
      />
      <Image
        className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 ms:relative ms:right-0 ms:translate-x-0 ms:top-0 ms:-translate-y-0 md:hidden"
        src="./icons/logoActualizatucarroM.svg"
        alt="Actualiza tu carro logotipo"
        width={50}
        height={50}
      />
      <Image
        src="./icons/logoActualizatucarroD.svg"
        width={200}
        height={30}
        alt="Your Company"
        onClick={() => {}}
        className="hidden md:block"
      />
      <div className="w-10 p-1 hidden ml-auto ms:block">
        <PiHeadsetFill className="w-full h-full" />
      </div>
      <div className="hidden ms:block">
        <ThemeModeButton />
      </div>
      <button className="w-10 p-1 hover:bg-primary-dm/20 rounded relative dark:text-text-dm transition-all ease-in-out">
        <FaCartShopping className="w-full h-full" />
      </button>
    </nav>
  )
}
