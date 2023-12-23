import PropTypes from "prop-types";
import React, { memo, useState, useRef } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import Indicator from "@/base-ui/indicator";
import { PrevArrow, NextArrow } from "./arrow";
import { CarouselWrapper } from "./style";

const Carousel = memo((props) => {
  const { itemData } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow controlClick={(num) => controlClickHandle(num)} />,
    prevArrow: <PrevArrow controlClick={(num) => controlClickHandle(num)} />,
    beforeChange: (oldIndex, newIndex) =>
      handleBeforeChange(oldIndex, newIndex),
    afterChange: (event, index) => dotClickHandle(event, index),
  };
  const controlClickHandle = (num) => {
    let newIndex = selectedIndex + num;
    if (newIndex < 0) {
      newIndex = itemData.length - 1;
    } else if (newIndex >= itemData.length) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
  };
  const handleBeforeChange = (oldIndex, newIndex) => {
    setSelectedIndex(newIndex);
  };
  const dotClickHandle = (event, index) => {
    if (typeof event !== "number") {
      setSelectedIndex(index);
    }
    sliderRef.current.slickGoTo(index);
  };
  return (
    <CarouselWrapper>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {itemData?.map((item, index) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(event) => dotClickHandle(event, index)}
              >
                <span
                  className={classNames("dot", {
                    active: selectedIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {itemData.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
    </CarouselWrapper>
  );
});

Carousel.propTypes = {
  itemData: PropTypes.array,
};

export default Carousel;

