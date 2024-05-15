'use client'
import { Toaster } from "@/components/ui/sonner";
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './(nav-bar)'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={inter.className}
        style={{ maxWidth: '1920px', margin: '0 auto' }}
      >
        <ThemeProvider attribute="class">
          <NavBar />
          {children}
          <Toaster position="bottom-right"/>
        </ThemeProvider>
      </body>
    </html>
  )
}
