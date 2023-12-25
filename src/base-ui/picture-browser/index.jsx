import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import classNames from "classnames";
import { BrowserWrapper } from "./style";
import Indicator from "@/base-ui/indicator";
import IconClose from "@/assets/icons/close";
import IconArrowLeft from "@/assets/icons/arrowLeft";
import IconArrowRight from "@/assets/icons/arrowRight";
import IconToggleTop from "@/assets/icons/toggle-top";
import IconToggleBottom from "@/assets/icons/toggle-bottom";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  const closeBtnClickHandle = () => {
    if (closeClick) closeClick();
  };
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  };
  const bottomClickHandle = (index) => {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };
  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={70} height={70} />
          </div>
          <div className="btn right" onClick={() => controlClickHandle()}>
            <IconArrowRight width={70} height={70} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              classNames="pic"
              timeout={200}
              key={pictureUrls[currentIndex]}
            >
              <img src={pictureUrls[currentIndex]} />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1} / {pictureUrls.length}:
              </span>
              <span>room apartment{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}</span>
              <span>{showList ? <IconToggleBottom /> : <IconToggleTop />}</span>
            </div>
          </div>
          <div className="list">
            <Indicator selectedIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex == index,
                    })}
                    onClick={() => bottomClickHandle(index)}
                    key={item}
                  >
                    <img src={item} />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;

