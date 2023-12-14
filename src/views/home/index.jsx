import React, { memo, useEffect } from "react";
import { BannerWrapper, HomeWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Section1, Section2 } from "@/components/section";
import isEmptyObj from "@/utils/isEmptyObj";
import { fetchHomeData } from "@/store/modules/home";

const Home = memo(() => {
  const { goodPrice, plus } = useSelector(
    (state) => ({
      goodPrice: state.home.goodPrice,
      plus: state.home.plus,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <BannerWrapper />
      <div className="content">
        {isEmptyObj(goodPrice) && <Section1 data={goodPrice}></Section1>}
        {isEmptyObj(plus) && <Section2 data={plus}></Section2>}
      </div>
    </HomeWrapper>
  );
});

export default Home;

