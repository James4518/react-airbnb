import React, { memo, useState } from "react";
import { HeaderWrapper } from "./style";
import Left from "./cpns/header-left";
import Center from "./cpns/header-center";
import Right from "./cpns/header-right";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="top">
          <Left />
          <Center
            isSearch={isSearch}
            searchBarClick={() => setIsSearch(true)}
          />
          <Right />
        </div>
      </div>
      {isSearch && (
        <div className="cover" onClick={() => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;

