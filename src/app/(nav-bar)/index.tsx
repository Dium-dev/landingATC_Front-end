'use client'
import { Button } from '@/components/button'
import Image from 'next/image'

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm px-2 py-4">
      <Button>none</Button>
      <Image
        className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 xs:hidden"
        src="./icons/logoActualizatucarroM.svg"
        alt="Actualiza tu carro logotipo"
        width={100}
        height={100}
      />
      <Button>shop</Button>
    </nav>
  )
}
