import React, { memo, useEffect } from "react";
import { BannerWrapper, HomeWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Section1, Section2, Section3 } from "@/components/section";
import Longfor from "@/components/longfor";
import isEmptyObj from "@/utils/isEmptyObj";
import { fetchHomeData } from "@/store/modules/home";

const Home = memo(() => {
  const { goodPrice, highScore, recommend, discount, longfor, plus } =
    useSelector(
      (state) => ({
        goodPrice: state.home.goodPrice,
        highScore: state.home.highScore,
        recommend: state.home.recommend,
        discount: state.home.discount,
        longfor: state.home.longfor,
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
        {isEmptyObj(discount) && <Section3 data={discount}></Section3>}
        {isEmptyObj(recommend) && <Section3 data={recommend}></Section3>}
        {isEmptyObj(goodPrice) && <Section1 data={goodPrice}></Section1>}
        {isEmptyObj(highScore) && <Section1 data={highScore}></Section1>}
        {isEmptyObj(plus) && <Section2 data={plus}></Section2>}
        {isEmptyObj(longfor) && <Longfor data={longfor}></Longfor>}
      </div>
    </HomeWrapper>
  );
});

export default Home;

