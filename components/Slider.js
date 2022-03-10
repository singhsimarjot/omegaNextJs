import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = ({settings,data}) => {
  return <Slider {...settings}>{data?.map((item,i)=><div key={i} className={` ${item.containerClass}`}>
  <img src={item.image} alt="pc-image" className={item.imgClass} />
</div>)}</Slider>
}

export default SliderCarousel