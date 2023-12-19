import React, { memo } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./cpns/entire-filter";
import EntirePagination from "./cpns/entire-pagination";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;

