"use client";

import ReactPageScroller from "react-page-scroller";
import { HowToBuyItem } from "@/components/HowToBuyItem";
import { PURCHASE_PROCESS } from "@/lib/constants";

const ComoComprarPage = () => {
  return (
    <ReactPageScroller containerWidth={'100%'}>
      {PURCHASE_PROCESS.map((item, index) => (
        <HowToBuyItem
          description={item.description}
          title={item.title}
          background={item.background}
          key={index}
          direction={index % 2 === 0 ? 'right' : 'left'}
          icon={item.icon}
        />
      ))}
    </ReactPageScroller>
  );
};
export default ComoComprarPage;
