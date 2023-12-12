import PropTypes from "prop-types";
import React, { memo } from "react";
import { ListWrapper } from "./style";
import ListItem from "./listItem";

const List = memo((props) => {
  const { list = [], itemWidth } = props;
  return (
    <ListWrapper>
      {list.slice(0, 8)?.map((item) => {
        return (
          <ListItem
            itemData={item}
            itemWidth={itemWidth}
            key={item.id}
          ></ListItem>
        );
      })}
    </ListWrapper>
  );
});

List.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default List;

