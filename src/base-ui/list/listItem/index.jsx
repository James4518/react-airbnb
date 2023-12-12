import PropTypes from "prop-types";
import React, { memo } from "react";
import { ListItemWrapper } from "./style";
import { Rating } from "@mui/material";

const ListItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <ListItemWrapper itemwidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} />
        </div>
        <span className="desc">{itemData.verify_info.messages.join("·")}</span>
        <span className="name">{itemData.name}</span>
        <div className="bottom">
          <span className="price">￥{itemData.price}/晚</span>
          <div className="ratingAndreview">
            <Rating
              value={itemData.star_rating}
              precision={0.1}
              readOnly
              sx={{ fontSize: "14px", color: "#00848A"}}
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
};

export default ListItem;

