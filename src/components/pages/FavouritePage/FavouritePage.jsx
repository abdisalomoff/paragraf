import { useSelector } from "react-redux";
import ProductCard from "../../UI/ProductCard/ProductCard"


export default function FavouritePage() {
    const favouriteList = useSelector((state)=> state?.favourite?.favourites)
    
    console.log(favouriteList);
  return (
    <section className='flex flex-col gap-6 my-5 px-20'>
        <h2 className='text-3xl font-semibold'>Избранный</h2>
    
        <ul>
              <li className='grid grid-cols-4 gap-4'>
                {favouriteList.map((fav)=> (
                    <ProductCard product={fav}/>
                ))}
              </li>  
        </ul>
    </section>
  );
}