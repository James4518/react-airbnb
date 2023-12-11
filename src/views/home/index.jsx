import React, { memo } from "react";
import { BannerWrapper, HomeWrapper } from "./style";

const Home = memo(() => {
  return (
    <HomeWrapper>
      <BannerWrapper />
    </HomeWrapper>
  );
});

export default Home;

