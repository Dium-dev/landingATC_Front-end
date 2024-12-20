'use client'
import { Toaster } from "@/components/ui/sonner";
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
      >
        <ThemeProvider attribute="class">
          <DialogProvider />
          {children}
          <Toaster position="bottom-right"/>
        </ThemeProvider>
      </body>
    </html>
  )
}
