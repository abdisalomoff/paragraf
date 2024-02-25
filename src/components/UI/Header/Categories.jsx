import Link from "next/link";
import { useEffect, useState } from "react";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
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

    const filteredCategories = ProductsCategoriesList.find(
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
          {ProductsCategoriesList.map((el, index) => (
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

const ProductsCategoriesList = [
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
        title: "Xiaomi",
        products: [
          "Xiaomi Mi 11",
          "Xiaomi Mi 10",
          "Redmi Note 10 Pro",
          "Poco X3 Pro",
          "Mi Mix 4",
        ],
      },
      {
        title: "Huawei",
        products: [
          "Huawei P40 Pro",
          "Huawei Mate 40 Pro",
          "Huawei Nova 8",
          "Honor 50",
          "Mate X2",
        ],
      },
      {
        title: "Sony",
        products: [
          "Xperia 1 III",
          "Xperia 5 III",
          "Xperia 10 III",
          "Xperia 1 II",
          "Xperia 5 II",
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
        products: [
          "MacBook Pro 16-inch",
          "MacBook Pro 14-inch",
          "MacBook Air M2",
          "iPad Pro with M2 chip",
        ],
      },
      {
        title: "Dell",
        products: [
          "XPS 17",
          "XPS 13",
          "Dell Inspiron 15",
          "Dell Latitude 14",
          "Alienware m15",
        ],
      },
      {
        title: "HP",
        products: [
          "HP Spectre x360",
          "HP Envy x360",
          "HP Pavilion",
          "HP Omen 15",
        ],
      },
      {
        title: "Lenovo",
        products: [
          "ThinkPad X1 Carbon Gen 9",
          "ThinkPad X1 Yoga Gen 6",
          "ThinkPad L14",
          "IdeaPad Flex 5",
          "Legion 5 Pro",
        ],
      },
      {
        title: "Asus",
        products: [
          "Asus ROG Zephyrus G14",
          "Asus ZenBook 14",
          "Asus VivoBook S15",
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
          "Yves Saint Laurent La Nuit de l'Homme",
          "Tom Ford Oud Wood",
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
        title: "Unisex Fragrances",
        products: [
          "Creed Aventus",
          "Tom Ford Black Orchid",
          "Byredo Gypsy Water",
          "Maison Francis Kurkdjian Baccarat Rouge 540",
          "Le Labo Santal 33",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Yves Saint Laurent L'Homme",
          "Paco Rabanne 1 Million",
          "Versace Eros",
          "Gucci Guilty",
          "Issey Miyake L'Eau d'Issey",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Yves Saint Laurent Black Opium",
          "Gucci Bloom",
          "Prada Candy",
          "Viktor & Rolf Bonbon",
          "Michael Kors Wonderlust",
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
          "Olay Regenerist Micro-Sculpting Cream",
          "The Ordinary Natural Moisturizing Factors + HA",
        ],
      },
      {
        title: "Sunscreen",
        products: [
          "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 30",
          "EltaMD UV Clear Broad-Spectrum SPF 46",
          "La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60",
        ],
      },
      {
        title: "Serums",
        products: ["Vitamin C Serum", "Hyaluronic Acid Serum", "Retinol Serum"],
      },
      {
        title: "Exfoliants",
        products: [
          "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
          "The Ordinary Glycolic Acid 7% Toning Solution",
          "Pixi Glow Tonic",
        ],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
  {
    categories: "Groceries",
    icon: FoodBankOutlinedIcon,
    subcategories: [
      {
        title: "Fruits",
        products: ["Apples", "Bananas", "Oranges"],
      },
      {
        title: "Vegetables",
        products: ["Carrots", "Broccoli", "Spinach"],
      },
      {
        title: "Dairy",
        products: ["Milk", "Cheese", "Yogurt"],
      },
      {
        title: "Bakery",
        products: ["Bread", "Bagels", "Croissants"],
      },
      {
        title: "Canned Goods",
        products: ["Tomatoes", "Beans", "Soup"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
  {
    categories: "Home Decoration",
    icon: ChairOutlinedIcon,
    subcategories: [
      {
        title: "Candles",
        products: [
          "Scented Candles",
          "Decorative Pillar Candles",
          "Tea Light Candles",
        ],
      },
      {
        title: "Wall Art",
        products: ["Canvas Prints", "Wall Tapestries", "Framed Artwork"],
      },
      {
        title: "Throw Pillows",
        products: [
          "Decorative Throw Pillows",
          "Cushion Covers",
          "Embroidered Pillows",
        ],
      },
      {
        title: "Vases",
        products: ["Glass Vases", "Ceramic Vases", "Metallic Vases"],
      },
      {
        title: "Mirrors",
        products: ["Wall Mirrors", "Standing Mirrors", "Decorative Mirrors"],
      },
      {
        title: "Rugs",
        products: ["Area Rugs", "Throw Rugs", "Runner Rugs"],
      },
      {
        title: "Clocks",
        products: ["Wall Clocks", "Desk Clocks", "Vintage Clocks"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },

  {
    categories: "Furniture",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "Living Room Furniture",
        products: ["Sofas", "Coffee Tables", "TV Stands"],
      },
      {
        title: "Bedroom Furniture",
        products: ["Beds", "Dressers", "Nightstands"],
      },
      {
        title: "Dining Room Furniture",
        products: ["Dining Tables", "Chairs", "Buffets"],
      },
      {
        title: "Home Office Furniture",
        products: ["Desks", "Office Chairs", "Bookcases"],
      },
      {
        title: "Outdoor Furniture",
        products: ["Patio Sets", "Chaise Lounges", "Outdoor Dining Tables"],
      },
      {
        title: "Kids Furniture",
        products: ["Kids Beds", "Children's Desks", "Toy Storage"],
      },
      {
        title: "Accent Furniture",
        products: ["Accent Chairs", "End Tables", "Console Tables"],
      },
      {
        title: "Storage Furniture",
        products: ["Shelving Units", "Cabinets", "Storage Benches"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
  {
    categories: "Tops",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "T-Shirts",
        products: [
          "Basic Cotton T-Shirt",
          "Graphic Print Tee",
          "V-Neck T-Shirt",
        ],
      },
      {
        title: "Blouses",
        products: ["Silk Blouse", "Button-Up Blouse", "Wrap Blouse"],
      },
      {
        title: "Sweaters",
        products: ["Crewneck Sweater", "V-Neck Sweater", "Cardigan"],
      },
      {
        title: "Hoodies",
        products: ["Pullover Hoodie", "Zip-Up Hoodie", "Fleece Hoodie"],
      },
      {
        title: "Tank Tops",
        products: ["Ribbed Tank Top", "Flowy Tank Top", "Racerback Tank"],
      },
      {
        title: "Long Sleeve Tops",
        products: ["Basic Long Sleeve", "Henley", "Turtleneck"],
      },
      {
        title: "Button-Down Shirts",
        products: ["Classic Oxford Shirt", "Flannel Shirt", "Denim Shirt"],
      },
      {
        title: "Sweatshirts",
        products: [
          "Crewneck Sweatshirt",
          "Hooded Sweatshirt",
          "Fleece Pullover",
        ],
      },
      {
        title: "Polo Shirts",
        products: ["Classic Polo", "Performance Polo", "Slim Fit Polo"],
      },
      {
        title: "Crop Tops",
        products: ["Cropped T-Shirt", "Crop Sweater", "Off-Shoulder Crop Top"],
      },
      {
        title: "Cardigans",
        products: [
          "Open Front Cardigan",
          "Chunky Knit Cardigan",
          "Long Cardigan",
        ],
      },
      {
        title: "Sleeveless Tops",
        products: ["Sleeveless Blouse", "Knit Tank Top", "Lace Camisole"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
  {
    categories: "Womens Dresses",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "Casual Dresses",
        products: ["T-Shirt Dress", "Sundress", "Shift Dress"],
      },
      {
        title: "Formal Dresses",
        products: ["Cocktail Dress", "Evening Gown", "Maxi Dress"],
      },
      {
        title: "Summer Dresses",
        products: ["Wrap Dress", "Strapless Sundress", "Halter Neck Dress"],
      },
      {
        title: "Party Dresses",
        products: ["Sequin Dress", "Bodycon Dress", "Mini Dress"],
      },
      {
        title: "Work Dresses",
        products: ["Pencil Dress", "A-Line Dress", "Sheath Dress"],
      },
      {
        title: "Maternity Dresses",
        products: [
          "Maternity Maxi Dress",
          "Wrap Maternity Dress",
          "Bodycon Maternity Dress",
        ],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },

  {
    categories: "Womens Shoes",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "Sneakers",
        products: ["Classic Sneakers", "Running Shoes", "High-Top Sneakers"],
      },
      {
        title: "Boots",
        products: ["Ankle Boots", "Knee-High Boots", "Over-the-Knee Boots"],
      },
      {
        title: "Flats",
        products: ["Ballet Flats", "Loafers", "Pointed Toe Flats"],
      },
      {
        title: "Heels",
        products: ["Stiletto Heels", "Block Heels", "Wedge Heels"],
      },
      {
        title: "Sandals",
        products: ["Flat Sandals", "Platform Sandals", "Slide Sandals"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
  {
    categories: "Mens Shirts",
    icon: AutoAwesomeRoundedIcon,
    subcategories: [
      {
        title: "Casual Shirts",
        products: ["Button-Down Shirt", "Short Sleeve Shirt", "Plaid Shirt"],
      },
      {
        title: "Dress Shirts",
        products: [
          "Classic Fit Dress Shirt",
          "Slim Fit Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Polo Shirts",
        products: ["Classic Polo", "Performance Polo", "Slim Fit Polo"],
      },
      {
        title: "T-Shirts",
        products: [
          "Basic Cotton T-Shirt",
          "Graphic Print Tee",
          "V-Neck T-Shirt",
        ],
      },
      {
        title: "Henley Shirts",
        products: [
          "Long Sleeve Henley",
          "Short Sleeve Henley",
          "Thermal Henley",
        ],
      },
      {
        title: "Flannel Shirts",
        products: [
          "Plaid Flannel Shirt",
          "Brushed Cotton Flannel",
          "Snap-Front Flannel",
        ],
      },
      {
        title: "Denim Shirts",
        products: [
          "Classic Denim Shirt",
          "Western Denim Shirt",
          "Chambray Shirt",
        ],
      },
      {
        title: "Tank Tops",
        products: ["Ribbed Tank Top", "Muscle Tank", "Athletic Tank"],
      },
      // Yoki boshqa subkategoriyalarni qo'shing...
    ],
  },
];
