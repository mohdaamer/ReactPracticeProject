import React from "react";
import Card from './Card';
import Slider from "react-slick";

function Courses() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full bg-[#E9F8F3B2] py-9">
      <div className="container md:max-w-[1200px] m-auto max-w-[400px] px-6 overflow-hidden">
        <div className="max-w-[200px] md:max-w-[1200px]">
        <h1 className="text-4xl font-semibold py-3">Most Popular <span className="primaryText">Courses</span></h1>
        <p className="text-[#6D737A] pb-12">Various versions have evolved over the years, sometimes by accident,</p>
        </div>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
}

export default Courses;
