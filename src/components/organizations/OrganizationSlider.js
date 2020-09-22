import React, { useContext } from "react";
import {fetchContext} from '../../fetchContext';
import OrganizationSliderList from "./OrganizationSliderList";

// https://www.npmjs.com/package/react-slick
// npm install react-slick --save
// npm install slick-carousel
// https://kenwheeler.github.io/slick/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrganizationSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  };
  const contextArrays = useContext(fetchContext);
	let organizations = contextArrays.organizations;

  return (
    <Slider {...settings}>
    {
      organizations.slice(0,5).map((program, idx) => (
      <OrganizationSliderList key={idx} program = {program}/>
      ))
    }
  </Slider>
  );
};

export default OrganizationSlider;
