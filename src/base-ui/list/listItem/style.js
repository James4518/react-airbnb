import styled from "styled-components";

export const ListItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemwidth};
  padding: 3px;
  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc,
  .name,
  .price {
    display: block;
  }
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    font-weight: 600;
    color: ${(props) => props.theme.textColor.primary};
    .ratingAndreview {
      position: relative;
      right: 14px;
    }
    .MuiRating-root {
      margin-right: 3px;
      top: 1px;
    }
  }
`;

