import React, { memo, useState, useEffect, useRef } from "react";
import ViewWrapper from "./style";
import IconArrowLeft from "@/assets/icons/arrowLeft";
import IconArrowRight from "@/assets/icons/arrowRight";

const ScrollView = memo((props) => {
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //总共可滚动宽度
    const clientWidth = scrollContentRef.current.clientWidth; //容器宽度
    totalDistanceRef.current = scrollWidth - clientWidth;     //滚动距离
    setIsRight(totalDistanceRef.current > 0);
  }, [props.children]);

  const handleClick = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const offset = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${offset}px)`;
    setPosIndex(newIndex);
    setIsLeft(offset > 0);
    setIsRight(totalDistanceRef.current > offset);
  };
  return (
    <ViewWrapper>
      {isLeft && (
        <div className="control left" onClick={() => handleClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {isRight && (
        <div className="control right" onClick={() => handleClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;