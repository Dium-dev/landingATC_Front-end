import { FC } from "react";
import CategoryCard from "./CategoryCard";

import { CATEGORIES } from "@/utils/constants";

const Categories: FC = () => {
  return (
    <section className="grid grid-cols-4 ms:grid-cols-8 px-2 py-6 max-w-f-hd mx-auto place-items-center gap-y-3">
      {CATEGORIES.map((category) => (
        <CategoryCard
          image={category.image}
          name={category.name}
          key={category.name}
        />
      ))}
    </section>
  );
};
export default Categories;
