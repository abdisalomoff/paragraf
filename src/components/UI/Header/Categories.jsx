import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryIcons from "./CategoryIcons"

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoriesChange, setCategoriesChange] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []); 

  const handleCategoriesMouseEnter = async (category) => {
    setCategoriesChange(category);

    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setSubcategories(response.data.products);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
    }
  };

  return (
    <div className={`absolute top-[80px] right-0 left-0 w-full h-[600px] flex bg-white rounded-lg`}>
      <div className="scrollbar w-3/12 h-full flex flex-col items-start justify-start gap-4 p-4 overflow-auto bg-[#F5F5F5]">
        <ul className="w-full">
          {categories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoriesMouseEnter(category)}
              className={`p-4 pr-0 hover:bg-[#fff] rounded-lg`}
            >
              <Link href="/" className="w-full flex text-base gap-4 font-medium">
                <CategoryIcons category={category} />
              <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                <ChevronRightIcon className="ms-auto" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="scrollbar w-9/12 flex flex-col gap-8 p-4 overflow-y-auto ps-8 pt-8">
        <h2 className="text-xl font-semibold">{categoriesChange.charAt(0).toUpperCase() + categoriesChange.slice(1)}</h2>
        <ul className="grid grid-cols-3 gap-4">
          {subcategories.map((product) => (
            <li key={product.id} className="flex ">
              <Link href="/" className="hover:text-[#FF9910] text-base">{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
