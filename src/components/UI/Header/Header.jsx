"use client";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Logo from "../../../../public/Logo.svg";
import Balance from "../../../../public/icons/balance.svg";
import ShoppingCart from "../../../../public/icons/cart.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Categories from "./Categories";

export default function Header() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [openCategories, setOpenCategories] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const data = await res.json();
      console.log(data.products);
      //   return (
      //     data && data.products && data.products.title && data.products.title.toLowerCase().includes(input)
      //   )
      setResults(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (input) => {
    setInput(input);
    fetchData(input);
  };

  return (
    <>
      <header className="fixed w-full h-[80px] flex justify-between items-center gap-8 px-[6%] py-4 border-b border-[#d3d3d3] z-99">
        <div className="flex items-center gap-4 ">
          <Link href={"/"}>
            <Image src={Logo} alt="Paragraf logo" />
          </Link>
        </div>
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex gap-3 py-2 px-4 bg-[#FF9910] rounded-lg text-white"
        >
           {openCategories ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          Категории
        </button>
        <div className="flex-col w-[600px]">
          <div className="flex relative flex-1 items-start">
            <input
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              type="text"
              placeholder="Искать товары"
              className="text-lg w-11/12 px-4 py-2 border-2 border-[#FF9910] rounded-lg outline-none"
            />
            <button className="absolute right-2 w-16 flex items-center justify-center bg-[#FF9910] rounded-e-lg py-3 px-6 text-white">
              <SearchIcon fontSize="medium" />
            </button>
          </div>
          {input.trim() && (
            <ul className="bg-slate-50 text-black absolute top-20 w-[550px] rounded-lg outline-none p-3">
              {results.map((result, index) => (
                <li key={index}>{result.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center flex-col">
            <Image className="mt-1" src={Balance} alt="balance" />
            Сравнение
          </div>
          <div className="flex items-center flex-col">
            <FavoriteBorderIcon />
            Избранное
          </div>
          <div className="flex items-center flex-col">
            <Image src={ShoppingCart} alt="cart" />
            Корзина
          </div>
          <Link href="/login">
            <button className="py-3 px-5 bg-[#F4F4F4] rounded-lg">Войти</button>
          </Link>
        </div>
      </header>
      {openCategories && <Categories />}
    </>
  );
}
