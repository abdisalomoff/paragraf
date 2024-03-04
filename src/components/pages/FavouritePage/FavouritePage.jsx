import { useSelector } from "react-redux";
import { useState } from "react";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradingIcon from '@mui/icons-material/Grading';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import ProductCard from "../../UI/ProductCard/ProductCard"

export default function FavouritePage() {
    const favouriteList = useSelector((state)=> state?.favourite?.favourites)
    const [activeMenuItem, setActiveMenuItem] = useState("Избранное");

    const handleMenuActiveFunc = (title) => {
      setActiveMenuItem(title);
  };
    const sideBarMenu = [
        {title: "Профиль", icon: PersonOutlineIcon},
        {title: "Мои карты", icon: AccountBalanceWalletOutlinedIcon},
        {title: "Мои адреса", icon: LocationOnOutlinedIcon},
        {title: "Мои заказы", icon: LocalMallOutlinedIcon},
        {title: "Избранное", icon: FavoriteBorderIcon},
        {title: "Отзывы, вопросы и ответы о товарах", icon: GradingIcon},
        {title: "Уведомления", icon: NotificationsNoneOutlinedIcon},
        {title: "Подписка", icon: PersonAddOutlinedIcon},
    ]
    
    console.log(favouriteList);
  return (
    <section className='flex flex-col gap-4 px-20 bg-[#F6F6F6] py-10'>
            <h2 className='text-3xl font-medium'>Избранный</h2>
            <div className='flex items-start justify-between gap-4'>
                <ul className='flex flex-col gap-2 w-72 bg-white rounded-lg shadow-md py-4 px-2'>
                    {sideBarMenu.map((list) => (
                        <li
                            key={list.title}
                            className={`${
                                activeMenuItem === list.title
                                    ? "bg-[#FFF7EC] text-orange-500"
                                    : ""
                            } w-full flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-[#FFF7EC]`}
                            onClick={() => handleMenuActiveFunc(list.title)}
                        >
                            <span><list.icon /></span>
                            <span className="font-normal">{list.title}</span>
                        </li>
                    ))}
                </ul>
                <div className='grid grid-cols-4 gap-4'>
                    {favouriteList.length === 0 ? (
                        <p className=" text-xl text-start font-medium text-gray-500">Not Found</p>
                    ) : (
                        favouriteList.map((favProduct) => (
                            <ProductCard key={favProduct.id} product={favProduct} />
                        ))
                    )}
                </div>
            </div>
        </section>
  );
}