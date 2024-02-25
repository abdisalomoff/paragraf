import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AirlineStopsOutlinedIcon from '@mui/icons-material/AirlineStopsOutlined';
import Woman2OutlinedIcon from '@mui/icons-material/WomanOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';

import { IoGlassesOutline } from "react-icons/io5";
import { PiDress } from "react-icons/pi";
import { GiBallerinaShoes } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { GiConverseShoe } from "react-icons/gi";
import { IoWatchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

export default function CategoryIcon({ category }) {
  const categoryIcons = {
    'smartphones': <PhoneIphoneRoundedIcon />,
    'laptops': <LaptopMacOutlinedIcon />,
    'fragrances': <DiamondRoundedIcon />,
    'skincare': <AutoAwesomeRoundedIcon />,
    'groceries': <FoodBankOutlinedIcon />,
    'home-decoration': <ChairOutlinedIcon />,
    'furniture': <HomeOutlinedIcon />,
    'tops': <AirlineStopsOutlinedIcon />,
    'womens-dresses': <PiDress size={22} />,
    'womens-shoes': <GiBallerinaShoes size={22} />,
    'mens-shirts': <IoShirtOutline size={20} />,
    'mens-shoes': <GiConverseShoe size={18} />,
    'mens-watches': <IoWatchOutline  size={20}/>,
    'womens-watches': <IoWatchOutline size={20} />,
    'womens-bags': <IoBagOutline size={20} />,
    'womens-jewellery': <Woman2OutlinedIcon />,
    'sunglasses': <IoGlassesOutline  size={22}/>,
    'automotive': <AirlineStopsOutlinedIcon />,
    'motorcycle': <AirlineStopsOutlinedIcon />,
    'lighting': <AirlineStopsOutlinedIcon />,
  };

  return categoryIcons[category];
}

