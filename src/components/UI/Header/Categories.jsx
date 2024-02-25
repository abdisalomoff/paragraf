import Link from "next/link";
import { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductsCategoriesList from "./ProductsCategoriesList";

export default function Categories() {
  const [categoriesChange, setCategoriesChange] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    handleCategoriesMouseEnter();
  }, [categoriesChange]);

  const handleCategoriesMouseEnter = (categories = categoriesChange) => {
    setCategoriesChange(categories);

    const filterCategories = ProductsCategoriesList.find(
      (item) => item.categories === categories
    );
    if (filterCategories) {
      setSubcategories(filterCategories.subcategories);
    } else {
      setSubcategories([]);
    }
  };

  return (
    <div
      className={`absolute top-[80px] right-0 left-0 w-full h-[600px] flex bg-white rounded-lg `}
    >
      <div className="scrollbar w-3/12 h-full flex flex-col items-start justify-start gap-4 p-4 overflow-auto bg-[#F5F5F5]">
        <ul className="w-full">
          {ProductsCategoriesList.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoriesMouseEnter(item.categories)}
              className={`p-4 pr-0 hover:bg-[#fff] rounded-lg`}
            >
              <Link href="/" className="w-full flex text-lg gap-4 font-medium">
                {<item.icon fontSize="medium" />}
                <p>{item.categories}</p>
                <ChevronRightIcon className="ms-auto" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="scrollbar w-9/12 flex flex-col gap-8 p-4 overflow-y-auto ps-8 pt-8">
        <h2 className="text-xl font-semibold">{categoriesChange}</h2>
        <div className="grid grid-cols-4 gap-4">
          {subcategories.map((subcategories) => (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{subcategories.title}</h2>
              <ul className="flex flex-col gap-2">
                {subcategories.products.map((product, index) => (
                  <li key={index} className="hover:text-[#FF9910]">
                    <Link href="/">{product}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

