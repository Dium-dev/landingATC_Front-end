'use client'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { IoSunny } from 'react-icons/io5'
import { HiMiniMoon } from 'react-icons/hi2'

export function ThemeModeButton() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleTheme = () =>
    currentTheme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <Button
      ownStyles
      className="group hover:bg-primary-dm/20 aspect-square h-9 w-9 px-[3px] py-[3px] transition-all ease-in-out"
      onClick={handleTheme}
    >
      {theme === 'dark' ? (
        <IoSunny className="w-full h-full group-hover:text-[#ECA72C]" />
      ) : (
        <HiMiniMoon className=" rotate-12 w-full h-full group-hover:text-[#28666E]" />
      )}
    </Button>
  )
}

export function ToggleTheme() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleTheme = () =>
    currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
  const className = `rotate-180 w-16 h-8 overflow-hidden rounded-full shadow outline-none ${
    theme === 'dark'
      ? "bg-background-lm before:grid before:place-content-center before:content-['☀️'] before:absolute before:h-6 before:aspect-square before:top-1/2 before:bg-background-dm before:rounded-full before:left-1 before:-translate-y-1/2"
      : "bg-background-dm after:rotate-180 after:opacity-100 after:duration-700 after:absolute  after:top-1/2 after:right-1 after:-translate-y-1/2 after:bg-background-lm after:shadow after:rounded-full after:h-6 after:aspect-square after:grid after:place-content-center after:content-['🌑']"
  }`
  console.log('theme', theme)

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" onChange={handleTheme} type="checkbox" />
      <div className={className}></div>
    </label>
  )
}
