import React, { memo } from "react";

export const PrevArrow = memo((props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick, controlClick } = props;
  function prevClickHandle(num) {
    onClick();
    controlClick(num);
  }
  return (
    <div
      className={className}
      style={{...style}}
      onClick={() => prevClickHandle(-1)}
    />
  );
})

export const NextArrow = memo((props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick, controlClick } = props;
  function nextClickHandle(num) {
    onClick();
    controlClick(num);
  }
  return (
    <div
      className={className}
      style={{...style}}
      onClick={() => nextClickHandle(1)}
    />
  );
})