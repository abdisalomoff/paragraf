import Link from "next/link";
import { useEffect, useState } from "react";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairIcon from "@mui/icons-material/Chair";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WomanIcon from "@mui/icons-material/Woman";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import ManIcon from "@mui/icons-material/Man";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Categories() {
  const [categoriesActive, setCategoriesActive] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    handleCategoriesMouseEnter();
  }, [categoriesActive]);

  const handleCategoriesMouseEnter = (categories = categoriesActive) => {
    setCategoriesActive(categories);

    const filteredCategories = categoriesList.find(
      (el) => el.categories === categories
    );
    if (filteredCategories) {
      setSubcategories(filteredCategories.subcategories);
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
          {categoriesList.map((el, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoriesMouseEnter(el.categories)}
              className={`p-4 pr-0 hover:bg-[#fff] rounded-lg`}
            >
              <Link href="/" className="w-full flex text-lg gap-4 font-medium">
                {<el.icon fontSize="medium" />}
                <p>{el.categories}</p>
                <ChevronRightIcon className="ms-auto" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="scrollbar w-9/12 flex flex-col gap-8 p-4 overflow-y-auto ps-8 pt-8">
        <h2 className="text-xl font-semibold">{categoriesActive}</h2>
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

const categoriesList = [
  {
    categories: "Smartphones",
    icon: PhoneIphoneRoundedIcon,
    subcategories: [
      {
        title: "Apple",
        products: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 12 Pro Max",
          "iPhone 12",
        ],
      },
      {
        title: "Samsung",
        products: [
          "Galaxy S21 Ultra",
          "Galaxy S21",
          "Galaxy Note 20 Ultra",
          "Galaxy Z Fold 3",
          "Galaxy A52",
        ],
      },
      {
        title: "Google",
        products: ["Pixel 6 Pro", "Pixel 6", "Pixel 5a", "Pixel 4a", "Pixel 4"],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
    ],
  },
  {
    categories: "Laptops",
    icon: LaptopMacOutlinedIcon,
    subcategories: [
      {
        title: "Apple",
        products: ["MacBook Pro 16-inch", "MacBook Pro 13-inch", "MacBook Air"],
      },
      {
        title: "Dell",
        products: ["XPS 15", "XPS 13", "Dell Inspiron", "Dell Latitude"],
      },
      {
        title: "HP",
        products: ["HP Spectre x360", "HP Envy", "HP Pavilion"],
      },
      {
        title: "Lenovo",
        products: [
          "ThinkPad X1 Carbon",
          "ThinkPad X1 Yoga",
          "ThinkPad T14",
          "IdeaPad 5",
        ],
      },
    ],
  },
  {
    categories: "Fragrances",
    icon: DiamondRoundedIcon,
    subcategories: [
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
    ],
  },
  {
    categories: "Skincare",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "Cleansers",
        products: [
          "Cetaphil Gentle Skin Cleanser",
          "Neutrogena Hydro Boost Hydrating Cleansing Gel",
          "La Roche-Posay Toleriane Hydrating Gentle Cleanser",
        ],
      },
      {
        title: "Moisturizers",
        products: [
          "CeraVe Moisturizing Cream",
          "Neutrogena Hydro Boost Water Gel",
          "Cetaphil Daily Hydrating Lotion",
        ],
      },
      {
        title: "Serums",
        products: [
          "The Ordinary Niacinamide 10% + Zinc 1%",
          "TruSkin Vitamin C Serum",
          "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
        ],
      },
    ],
  },
  {
    categories: "Groceries",
    icon: FoodBankOutlinedIcon,
    subcategories: [
      {
        title: "Produce",
        products: ["Apples", "Bananas", "Strawberries", "Spinach", "Tomatoes"],
      },
      {
        title: "Dairy",
        products: ["Milk", "Cheese", "Yogurt", "Butter", "Eggs"],
      },
      {
        title: "Snacks",
        products: ["Chips", "Popcorn", "Granola Bars", "Nuts", "Pretzels"],
      },
    ],
  },
  {
    categories: "Home-decoration",
    icon: ChairOutlinedIcon,
    subcategories: [
      {
        title: "Wall Decor",
        products: [
          "Wall Art",
          "Mirrors",
          "Wall Clocks",
          "Tapestries",
          "Wall Decals",
        ],
      },
      {
        title: "Home Accents",
        products: [
          "Candles",
          "Vases",
          "Decorative Bowls",
          "Sculptures",
          "Bookends",
        ],
      },
    ],
  },
  {
    categories: "Furniture",
    icon: ChairIcon,
    subcategories: [
      {
        title: "Living Room Furniture",
        products: [
          "Sofas",
          "Coffee Tables",
          "Accent Chairs",
          "TV Stands",
          "Ottomans",
        ],
      },
      {
        title: "Bedroom Furniture",
        products: [
          "Beds",
          "Dressers",
          "Nightstands",
          "Mattresses",
          "Bed Frames",
        ],
      },
    ],
  },
  {
    categories: "Tops",
    icon: CheckroomIcon,
    subcategories: [
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
    ],
  },
  {
    categories: "Womens-dresses",
    icon: WomanIcon,
    subcategories: [
      {
        title: "Casual Dresses",
        products: [
          "Sundress",
          "T-shirt Dress",
          "Shift Dress",
          "Wrap Dress",
          "Maxi Dress",
        ],
      },
      {
        title: "Formal Dresses",
        products: [
          "Cocktail Dress",
          "Evening Gown",
          "A-line Dress",
          "Sheath Dress",
          "Bodycon Dress",
        ],
      },
    ],
  },
  {
    categories: "Womens-shoes",
    icon: IceSkatingIcon,
    subcategories: [
      {
        title: "Heels",
        products: [
          "Stiletto Heels",
          "Block Heels",
          "Wedge Heels",
          "Platform Heels",
          "Ankle Strap Heels",
        ],
      },
      {
        title: "Flats",
        products: [
          "Ballet Flats",
          "Loafers",
          "Espadrilles",
          "Mules",
          "Slip-on Sneakers",
        ],
      },
    ],
  },
  {
    categories: "Mens-shirts",
    icon: ManIcon,
    subcategories: [
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
    ],
  },
];
