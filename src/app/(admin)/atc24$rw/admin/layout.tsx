"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ModalProvider } from "./components/ModalProvider";

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
      {children}
      <ModalProvider />
    </>
  );
};

export default DashboardLayout;
