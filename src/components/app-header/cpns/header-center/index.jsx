import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "icons/searchBar";

const Center = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <span className="text">搜索房源和体验</span>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default Center;

