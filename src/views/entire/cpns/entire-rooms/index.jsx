import React, { memo } from "react";
import { RoomWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import ListItem from "@/base-ui/list/listItem";

const EntireRooms = memo(() => {
  const { totalCount, rooms, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      rooms: state.entire.rooms,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );
  return (
    <RoomWrapper>
      <h2>{totalCount}处住所</h2>
      <div className="list">
        {
          rooms.map((item) => {
            return <ListItem itemData={item} itemWidth="20%" key={item.id} />;
          })
        }
      </div>
    </RoomWrapper>
  );
});

export default EntireRooms;

