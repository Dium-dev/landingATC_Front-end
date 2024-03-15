import Image from 'next/image'
import { useEffect, type ReactNode, useState } from 'react'

import { ToggleTheme } from '@/components/theme-mode'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineX } from 'react-icons/hi'
import Link from 'next/link'
import { RoutesProps } from '.'

interface Props {
  buttonValue: ReactNode
  open: boolean
  routes: RoutesProps
  handleOPen(): void
}

export function MobileMenu({ buttonValue, open, handleOPen, routes }: Props) {
  const [curIndex, setCurIndex] = useState(0)
  const handleCurIndex = (index: number) => setCurIndex(index ? index : 0)
  const route = useRouter()
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <button className="w-10 p-1 ms:hidden" onClick={handleOPen}>
        {buttonValue}
      </button>
      {open && (
        <div
          id="background-mobile"
          className="fixed top-0 left-0 h-screen bg-background-dm/70 w-full z-[60] ms:hidden transition-opacity duration-200 ease-in-out"
          onClick={handleOPen}
        >
          <div
            style={{
              animation: '1s mobile-menu-animate',
            }}
            className="h-full bg-background-lm max-w-[290px] py-6 pl-4 pr-3 gap-8 flex flex-col dark:bg-background-dm transition-all ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between">
              <Image
                src={'./icons/logoActualizatucarroD.svg'}
                width={160}
                height={30}
                alt="Your Company"
                onClick={() => route.push('/')}
              />
              <button
                className="w-8 p-1 aspect-square text-secondary-dm/90 "
                onClick={() => {
                  handleOPen()
                }}
              >
                <HiOutlineX className="w-full h-full" />
              </button>
            </header>
            <ul className="space-y-3">
              {routes.map(({ label, to, sub }) => (
                <li
                  className="transition-all ease-in-out"
                  key={label}
                  onClick={() => route.push(to)}
                >
                  <div className="flex items-center">
                    <Button className="w-full text-start">{'' + label}</Button>
                    {sub && (
                      <Button
                        className="w-1/5"
                        onClick={(evt) => {
                          evt.stopPropagation()
                          handleCurIndex(curIndex === 1 ? 0 : 1)
                        }}
                      >
                        <FiChevronDown className="w-full h-full" />
                      </Button>
                    )}
                  </div>

                  {sub && (
                    <Accordion index={1} current={curIndex} values={sub} />
                  )}
                </li>
              ))}

              <li>
                <Button className='w-full text-start'>
                  Contacto
                </Button>
              </li>
            </ul>
            <div>
              <hr className="border-secondary-dm/50 pb-8" />
              <p className="pl-3 flex items-center justify-between font-medium">
                Claro {<ToggleTheme />} Oscuro
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface AccordionProps {
  index: number
  current: number
  values: Array<{
    label: string
    to: string
  }>
}

function Accordion({ index, current, values }: AccordionProps) {
  return (
    <div
      className={`${
        index === current ? 'h-auto' : 'h-0'
      } overflow-hidden ml-4 transition-all ease-in-out`}
    >
      {values.map(({ label }, i) => (
        <Link href={`/products?category=${label}`} key={i} className="block">
          {label}
        </Link>
      ))}
    </div>
  )
}

function AvatarProfile({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex box-content">
      <Image
        src={'./images/logo/logoM.svg'}
        width={50}
        height={50}
        alt={name}
        className="border rounded-full"
      />
      <Button className="flex flex-col line-clamp-1">
        <span title={name} className="whitespace-nowrap line-clamp-1 w-full">
          {name.length > 21 ? name.slice(0, 21) + '...' : name}
        </span>
        <span className="text-xs font-normal">Ver Perfil</span>
      </Button>
    </div>
  )
}
