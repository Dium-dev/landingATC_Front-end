"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ModalProvider } from "./components/ModalProvider";
import { NavBar } from "./components/NavBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

    if (!token) router.push("/atc24$rw");
  }, [router]);

  return (
    <>
      <NavBar />
      {children}
      <ModalProvider />
    </>
  );
};

export default DashboardLayout;
