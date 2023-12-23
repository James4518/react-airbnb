import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoomWrapper } from "./style";
import ListItem from "@/base-ui/list/listItem";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  const { totalCount, rooms } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      rooms: state.entire.rooms,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );
  return (
    <RoomWrapper>
      <h2>{totalCount}处住所</h2>
      <div className="list">
        {rooms.map((item) => {
          return (
            <ListItem
              itemData={item}
              itemWidth="20%"
              itemClick={roomClickHandle}
              key={item.id}
            />
          );
        })}
      </div>
    </RoomWrapper>
  );
});

export default EntireRooms;

