import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rating } from "@mui/material";
import { ListItemWrapper } from "./style";
import Carousel from "@/base-ui/carousel";

const ListItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData);
  };
  const picElement = (
    <div className="cover">
      <img src={itemData.picture_url} />
    </div>
  );
  const sliderElement = (
    <div className="slider">
      <Carousel itemData={itemData.picture_urls}></Carousel>
    </div>
  );
  return (
    <ListItemWrapper itemwidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {!itemData.picture_urls ? picElement : sliderElement}
        <span className="desc">{itemData.verify_info.messages.join("·")}</span>
        <span className="name">{itemData.name}</span>
        <div className="bottom">
          <span className="price">￥{itemData.price}/晚</span>
          <div className="ratingAndreview">
            <Rating
              value={itemData.star_rating}
              precision={0.1}
              readOnly
              sx={{ fontSize: "14px", color: "#00848A" }}
            />
            <span className="count">{itemData.reviews_count}</span>
          </div>
        </div>
      </div>
    </ListItemWrapper>
  );
});

ListItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
};

export default ListItem;

