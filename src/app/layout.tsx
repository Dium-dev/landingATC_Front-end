import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './(nav-bar)'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Actualizatucarro',
  description: 'Accesorios premiun para autos tipo Original',
  keywords: ['accesorios', 'repuestos', 'farolas', 'stops', 'tuning'],
}

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
        <NavBar />
        {children}
      </body>
    </html>
  )
}
