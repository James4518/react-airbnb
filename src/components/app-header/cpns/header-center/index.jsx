import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CenterWrapper } from "./style";
import searchTitles from "@/assets/data/search_titles";
import IconSearchBar from "icons/searchBar";
import SearchTabs from "./cpns/search-tabs";
import SearchSection from "./cpns/search-section";

const Center = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = searchTitles.map((item) => item.title);
  const searchBarClickHandle = () => {
    if (searchBarClick) searchBarClick();
  };
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <span className="text">搜索房源和体验</span>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSection searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

Center.propTypes = {
  isSearch: PropTypes.bool,
  searchBarClick: PropTypes.func,
};
export default Center;

