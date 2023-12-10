import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import Left from "./cpns/header-left";
import Center from "./cpns/header-center";
import Right from "./cpns/header-right";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <Left />
      <Center />
      <Right />
    </HeaderWrapper>
  );
});

export default AppHeader;
