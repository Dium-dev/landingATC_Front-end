import Footer from "@/components/Footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="bg-[#1C2023]">
        <Footer />
      </div>
    </>
  );
}