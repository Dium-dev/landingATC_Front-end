import { useEffect, useState } from "react";
import { SupportDialog } from ".";

export const DialogProvider = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) null;

  return (
    <SupportDialog />
  )
};
