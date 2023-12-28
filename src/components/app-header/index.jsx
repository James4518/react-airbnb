import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import classNames from "classnames";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import { useScrollPosition } from "@/hooks";
import Left from "./cpns/header-left";
import Center from "./cpns/header-center";
import Right from "./cpns/header-right";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  const { isFixed, topAlpha } = useSelector(
    (state) => ({
      isFixed: state.main.headerConfig.isFixed,
      topAlpha: state.main.headerConfig.topAlpha,
    }),
    shallowEqual
  );
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current) > 50) setIsSearch(false);
  const isAlpha = topAlpha && scrollY == 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <Left />
            <Center
              isSearch={isSearch || isAlpha}
              searchBarClick={() => setIsSearch(true)}
            />
            <Right />
          </div>
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
        <SearchAreaWrapper isSearch={isAlpha || isSearch} />
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;

