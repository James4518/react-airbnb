import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  .slick-slider {
    width: 95%;
    height: 95%;
  }
  .slick-prev {
    left: -12px;
  }
  .slick-next {
    right: -1px;
  }
  .slick-prev,
  .slick-next {
    z-index: 9;
  }
  .slick-prev::before,
  .slick-next::before {
    color: #000;
    font-size: 28px;
  }
  .indicator {
    position: absolute;
    z-index: 9;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.29%;

      .dot {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;

        &.active {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
`;
