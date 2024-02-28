import { useState, useEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 600);
  }, []);

  return {
    isMobile,
  };
};
export default useMobile;
