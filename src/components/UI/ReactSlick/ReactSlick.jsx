"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Ipad from "../../../../public/images/main/ipad.png";
import Image from "next/image";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer z-10" onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer z-10" onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
}


const SwipperData = [
  {
    id: 1,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
  {
    id: 2,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
  {
    id: 3,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
  {
    id: 4,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
  {
    id: 5,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
  {
    id: 6,
    title: "Смартфоны в рассрочку",
    bgImg: Ipad,
  },
];

function ReactSlick() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      return (
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "10px",
          }}
        >
          <ul>
            {dots.map((dot, index) => (
              <div key={index}>{dot}</div>
            ))}
          </ul>
        </div>
      );
    },
    customPaging: (i) => {
      return (
        <div
          style={{
            width: "30px",
            height: "15px",
            borderRadius: "1rem",
          }}
        ></div>
      );
    },
  };

  return (
    <section className="slider-container bg-white rounded-lg -z-10">
      <Slider {...settings}>
        {SwipperData.map((swipper) => (
          <div key={swipper.id} className="flex justify-between h-[400px] px-8">
            <div className="w-5/12 h-full flex flex-col justify-center items-start gap-6 px-16 py-4">
              <h3 className="text-5xl font-bold">{swipper.title}</h3>
              <p>Купить любимые смартфоны в рассрочку</p>
              <button className="py-2 px-6 bg-[#FF9910] rounded-lg text-white cursor-pointer">
                Смотреть все
              </button>
            </div>
            <Image src={Ipad} width={200} height={300} alt="picture"/>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ReactSlick;
