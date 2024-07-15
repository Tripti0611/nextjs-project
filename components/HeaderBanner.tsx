"use client";
import React from 'react';
import Slider from "react-slick";  // Correct import for Slider
import Image from 'next/image';  // Assuming you're using Next.js' Image component for better image handling

const Slide = ({ img, title, mainTitle }) => (
  <div className="slide">
    <Image src={img} alt={title} layout="responsive" width={1920} height={1080} />
    <h2>{mainTitle}</h2>
  </div>
);

const HeaderBanner = () => {
  const settings = { 
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/images/heroSection.jpg",
      title: "herobanner",
      mainTitle: "",
    },
    // {
    //   id: 1,
    //   img: "/images/heroSection1.jpg",
    //   title: "herobanner",
    //   mainTitle: "nexcent banner",
    // },
    // {
    //   id: 2,
    //   img: "/images/heroSection2.jpg",
    //   title: "herobanner",
    //   mainTitle: "nexcent banner",
    // },
  ];

  // Duplicate each slide three times
  const repeatedSlides = slideData.reduce((acc, current) => {
    return acc.concat([current, current, current]); // Repeat each slide three times
  }, []);

  return (
    <div className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
        {repeatedSlides.map((item, index) => (
          <Slide
            key={index}  // Use index as key since items are repeated
            img={item.img} 
            title={item.title} 
            mainTitle={item.mainTitle} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default HeaderBanner;
