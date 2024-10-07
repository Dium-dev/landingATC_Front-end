import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NavBar } from "../(nav-bar)";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <WhatsAppButton />
    </>
  );
}
