import { DispatchWithoutAction } from "react";
import { BsChevronCompactRight } from "react-icons/bs";

interface NextButtonProps {
  onClick: DispatchWithoutAction;
}

export const NextButton = ({ onClick }: NextButtonProps) => {
  return (
    <button onClick={onClick} className="bg-black rounded-full p-1 ms:p-2 opacity-80">
      <BsChevronCompactRight size={30} color="white"/>
    </button>
  );
};
