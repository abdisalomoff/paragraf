import React from 'react';
// import Header from '@/components/UI/Header/Header';
// import Footer from '@/components/UI/Footer/Footer';
import ProductCardList from '@/components/UI/ProductCardList/ProductCardList';
import ReactSlider from '@/components/UI/ReactSlick/ReactSlick';

export default function Home() {
  return (
      <main className="px-20 bg-[#F6F6F6] pt-10 pb-10">
        <ReactSlider />
        <ProductCardList />
      </main>
  );
}
