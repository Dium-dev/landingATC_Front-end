'use client'
import { Button } from '@/components/button'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { ContactIcon, ShoppingCartIcon } from '@/assets/icons'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { ThemeModeButton } from '@/components/theme-mode'
import { CgChevronDown } from 'react-icons/cg'

const routes = [
  {
    label: 'Productos',
    url: '/products',
    sub: [
      {
        label: 'Farola',
        to: 'farolas',
      },
      {
        label: 'Luces',
        to: 'farolas',
      },
    ],
  },
  { label: 'Como comprar', url: '/how-to-buy' },
  { label: 'Blog', url: 'https://actualizatucarro.blogspot.com' },
  { label: 'Nosotros', url: '/about-us' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const handleOPen = () => setOpen((cur) => !cur)

  return (
    <nav className="text-text-lm sticky top-0 z-40 backdrop-blur-sm px-4 py-6 justify-between flex items-center bg-background-lm/90 dark:bg-background-dm/90 shadow-md dark:text-text-dm">
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

      <ul className="ms:flex gap-3 mx-auto hidden">
        {routes.map(({ label, sub }) => (
          <li className="relative group" key={label}>
            <Button className="flex items-center gap-2 relative">
              {' '}
              {label}
              {sub?.length && <CgChevronDown className="w-5 h-5 -mr-2" />}
            </Button>
            {sub?.length && (
              <div
                style={{ animation: 'popover-ani 0.5s alternate' }}
                className="hidden -z-10 absolute left-1/2 -translate-x-1/2 w-full top-full group-hover:block"
              >
                <main style={{
                  zIndex: '-1000'
                }} className="bg-background-lm ring-1 ring-primary-dm/5 leading-3 mt-6 rounded px-3 py-4 shadow dark:bg-background-dm">
                  {sub.map((_a, i) => (
                    <Button key={i} className="w-full text-start text-primary-dm">
                      {_a.label}
                    </Button>
                  ))}
                </main>
              </div>
            )}
          </li>
        ))}
      </ul>

      <ContactIcon className="w-10 h-full hidden ml-auto ms:block mr-2" />
      <div className="hidden ms:block">
        <ThemeModeButton />
      </div>
      <ShoppingCartIcon className="w-10 p-0.5 h-full hover:bg-primary-dm/20 rounded relative  transition-all ease-in-out" />
    </nav>
  )
}
