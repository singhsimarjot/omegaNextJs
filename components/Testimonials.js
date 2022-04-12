import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({settings,data,containerClass,usernameWrapper}) => {
  return <Slider {...settings}>{data?.map((item,i)=><div key={i} className={` ${containerClass} `}>
  <p>{item.description}</p>
  <span className={usernameWrapper}>{item.name}</span>
</div>)}</Slider>
}

export default Testimonial