import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NavBar } from "../(nav-bar)";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-background-lm/90 dark:bg-background-dm/90 w-full">
        <NavBar />
      </div>
      {children}
      <WhatsAppButton />
    </>
  );
}
