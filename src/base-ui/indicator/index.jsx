import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectedIndex } = props;
  const contentRef = useRef();
  useEffect(() => {
    const el = contentRef.current.children[selectedIndex];
    const offset = el.offsetLeft;
    const itemWidth = el.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    const totalDistance = contentScroll - contentWidth;
    let distance = offset + itemWidth * 0.5 - contentWidth * 0.5;
    if (distance < 0) distance = 0;
    if (distance > totalDistance) distance = totalDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectedIndex]);
  return (
    <IndicatorWrapper>
      <div
        className="i-content"
        ref={contentRef}
      >
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectedIndex: PropTypes.number,
};

export default Indicator;

