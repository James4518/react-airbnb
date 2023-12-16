import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} />
          <div className="bg-cover"></div>
          <div className="info">
            <span className="city">{itemData.city}</span>
            <span className="price">均价{itemData.price}</span>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongforItem;

