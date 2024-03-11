import { DispatchWithoutAction } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

interface PreviousButtonProps {
  onClick: DispatchWithoutAction;
}

export const PreviousButton = ({ onClick }: PreviousButtonProps) => {
  return (
    <button onClick={onClick} className="bg-black rounded-full p-1 ms:p-2 opacity-80">
      <BsChevronCompactLeft size={30} color="white"/>
    </button>
  );
};
