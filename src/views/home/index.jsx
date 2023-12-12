import React, { memo, useEffect } from "react";
import { BannerWrapper, HomeWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Section from "@/components/section";
import { fetchHomeData } from "@/store/modules/home";

const Home = memo(() => {
  const { goodPrice } = useSelector(
    (state) => ({
      goodPrice: state.home.goodPrice,
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
      <Section data={goodPrice}></Section>
      </div>
    </HomeWrapper>
  );
});

export default Home;

