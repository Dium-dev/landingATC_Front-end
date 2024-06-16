'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { DialogProvider } from '@/components/SupportDialog/DialogProvider'

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
          <DialogProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
