import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import { AboutUsBanner } from '@/components/AboutUsBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualizatucarro',
  description: 'Accesorios premiun para autos tipo Original',
  keywords: ['accesorios', 'repuestos', 'farolas', 'stops', 'tuning'],
}
import Blog from "@/components/Blog";
import BrandsCarousel from "@/components/BrandsCarousel";
import { Reviews } from "@/components/Reviews";
import { PaymentMethods } from '@/components/PaymentMethods'
import { ReviewsSkeleton } from "@/components/Reviews/ReviewsSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <AboutUsBanner />
      <BrandsCarousel />
      <Blog />
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
      <PaymentMethods />
    </main>
  )
}
