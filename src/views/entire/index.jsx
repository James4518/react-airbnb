import React, { memo } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./cpns/entire-filter";
import EntireRooms from "./cpns/entire-rooms";
import EntirePagination from "./cpns/entire-pagination";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;

