"use client";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

import Balance from "../../../../public/icons/balance.svg";
import Image from "next/image";

import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from "@/components/redux/favoritesSlice";

import Stars from "../../../../public/icons/stars.svg"

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favouriteProducts = useSelector((state)=> state.favourite.favourites);
  const [favouriteProduct, setFavouriteProduct] = useState(false);

  useEffect(() => {
    setFavouriteProduct(favouriteProducts.some((favProduct) => favProduct.id === product.id));
  }, [product, favouriteProducts]);

  const HandleToggleFavourite = () => {
    if (product) dispatch(addToFavourite(product));
  };

  return (
    <li className="relative flex flex-col bg-white rounded-lg pt-6 pb-4">
      <span className="absolute top-4 left-4 bg-[#FF0000] text-white rounded-lg text-lg px-4 py-1">
        {product.discountPercentage}%
      </span>
      <div className="absolute top-4 right-4 flex gap-4">
        <Image className="mt-1" src={Balance} alt="balance" />
        <button onClick={HandleToggleFavourite}>
          {favouriteProduct ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </button>
      </div>
      <div className="w-full h-[250px] flex items-center justify-center">
        <img
          src={`${product.thumbnail}`}
          className="w-[250px] h-[150px] object-cover"
          alt="product thumbnail"
        />
      </div>
      <div className="flex flex-col gap-1 px-4">
        <span className="text-base text-[#7E7E83]">{product.category}</span>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <div className="flex gap-4">
        <Image src={Stars} width={100} height={300} alt="picture"/>
          <span className="font-semibold">{product.rating}</span>
        </div>

        <div className="flex gap-2 items-center">
          <p className="bg-[#FF9910] py-1 px-2 text-sm text-white rounded-full">
            {product.price} сум
          </p>
          <span className="text-[#7E7E83] font-semibold">x 12 мес</span>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className="flex flex-col">
            <p className="text-[#C3C3CA] text-lg line-through">
              {product.discountPercentage} сум
            </p>
            <h2 className="text-xl font-semibold">{product.price} сум</h2>
          </div>
          <span className="p-4 text-[#FF9910] cursor-pointer">
            <AddShoppingCartIcon />
          </span>
        </div>
      </div>
    </li>
  );
}
