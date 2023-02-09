import React, { useState } from "react";
import Image from "next/image";

import { FeatureContent } from "./FeatureContent";
import {ArrowRightCircleIcon, ArrowLeftCircleIcon} from "@heroicons/react/24/outline";

import Slider from "react-slick";

export const Carousel = ({data}) => {
    console.log(data, 'carousel');
    const [componentsToRender, setComponentsToRender] = useState([])
    const { autoPlay, conversions, autoPlayIntervalInSeconds } = data.attributes;
    const DEFAULT_AUTOPLAY_INTERVAL = 30 * 1000;
    const autoPlayInterval = !autoPlayIntervalInSeconds ? DEFAULT_AUTOPLAY_INTERVAL : autoPlayIntervalInSeconds * 1000;

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRightCircleIcon />,
        prevArrow: <ArrowLeftCircleIcon />,
        autoplaySpeed: autoPlayInterval,
        autoplay: autoPlay,
      };

    const getComponentsToRender = () => {
        let components = [];

         conversions.map((item, index) => {
            let element = (
            <FeatureContent
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
            />);

            components.push(element);
        });
        setComponentsToRender(components);
    }

    if (componentsToRender.length === 0) {
        getComponentsToRender();
    }

    return (
        <div className="">
          <Slider {...settings}>{componentsToRender}</Slider>
        </div>
      );
}
