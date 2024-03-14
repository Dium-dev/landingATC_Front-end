import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualizatucarro',
  description: 'Accesorios premiun para autos tipo Original',
  keywords: ['accesorios', 'repuestos', 'farolas', 'stops', 'tuning'],
}

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
    </main>
  )
}
