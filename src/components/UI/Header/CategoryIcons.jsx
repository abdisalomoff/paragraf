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
    'womens-dresses': <Woman2OutlinedIcon />,
    'womens-shoes': <Woman2OutlinedIcon />,
    'mens-shirts': <ManOutlinedIcon />,
    'mens-shoes': <ManOutlinedIcon />,
    'mens-watches': <ManOutlinedIcon />,
    'womens-watches': <ManOutlinedIcon />,
    'womens-bags': <ManOutlinedIcon />,
    'womens-jewellery': <ManOutlinedIcon />,
    'sunglasses': <AirlineStopsOutlinedIcon />,
    'automotive': <AirlineStopsOutlinedIcon />,
    'motorcycle': <AirlineStopsOutlinedIcon />,
    'lighting': <AirlineStopsOutlinedIcon />,
  };

  return categoryIcons[category];
}

