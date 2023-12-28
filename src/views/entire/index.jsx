import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EntireWrapper } from "./style";
import { changeHeaderConfigAction } from "@/store/modules/main";
import EntireFilter from "./cpns/entire-filter";
import EntireRooms from "./cpns/entire-rooms";
import EntirePagination from "./cpns/entire-pagination";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;

