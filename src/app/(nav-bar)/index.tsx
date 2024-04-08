'use client'
import { Button } from '@/components/button'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { ContactIcon, ShoppingCartIcon } from '@/assets/icons'
import { MobileMenu } from './mobile-menu'
import { useState } from 'react'
import { ThemeModeButton } from '@/components/theme-mode'
import { CgChevronDown } from 'react-icons/cg'
import { useRouter } from 'next/navigation'

export type RoutesProps = Array<{
  label: string
  to: string
  sub?: Array<{ label: string; to: string }>
}>

const routes: RoutesProps = [
  {
    label: 'Tienda',
    to: 'https://shop.actualizatucarro.com/',
  },
  { label: 'Como comprar', to: '/how-to-buy' },
  { label: 'Blog', to: 'https://actualizatucarro.blogspot.com' },
  { label: 'Nosotros', to: '/about-us' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const handleOPen = () => setOpen((cur) => !cur)
  const route = useRouter()

  return (
    <nav className="text-text-lm sticky top-0 z-40 backdrop-blur-sm px-4 py-6 justify-between flex items-center bg-background-lm/90 dark:bg-background-dm/90 shadow-md dark:text-text-dm">
      <MobileMenu
        routes={routes}
        buttonValue={<HiBars3 className="w-full h-full" />}
        open={open}
        handleOPen={handleOPen}
      />
      <Image
        className="absolute cursor-pointer right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 ms:relative ms:right-0 ms:translate-x-0 ms:top-0 ms:-translate-y-0 md:hidden"
        src="./icons/logoActualizatucarroM.svg"
        alt="Actualiza tu carro logotipo"
        width={50}
        height={50}
        onClick={() => route.push('/')}
      />
      <Image
        src="./icons/logoActualizatucarroD.svg"
        width={200}
        height={30}
        alt="Your Company"
        onClick={() => route.push('/')}
        className="hidden md:block cursor-pointer"
      />

      <ul className="ms:flex gap-3 mx-auto hidden md:left-1/2 md:absolute md:-translate-x-1/2 lg:gap-7">
        {routes.map(({ label, to, sub }) => (
          <li className="relative group" key={label}>
            <Button
              className="flex items-center gap-2 relative"
              onClick={() => route.push(to)}
            >
              {' '}
              {label}
              {sub?.length && <CgChevronDown className="w-5 h-5 -mr-2" />}
            </Button>
            {sub?.length && (
              <div
                style={{ animation: 'popover-ani 0.5s alternate' }}
                className="hidden -z-10 absolute left-1/2 -translate-x-1/2 w-full top-full group-hover:block"
              >
                <main className="bg-background-lm ring-1 ring-primary-dm/5 leading-3 mt-6 rounded px-3 py-4 shadow dark:bg-background-dm">
                  {sub.map((_a, i) => (
                    <Button
                      key={i}
                      className="w-full text-start text-primary-dm"
                    >
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
      <ShoppingCartIcon
        onClick={() => route.push(routes[0].to)}
        className="w-10 p-0.5 h-full hover:bg-primary-dm/20 rounded relative  transition-all ease-in-out"
      />
    </nav>
  )
}
