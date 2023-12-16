import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getGoodPriceData,
  getHotRecommendData,
  getHighScoreData,
  getDiscountData,
  getLongforData,
  getPlusData,
} from "@/network/modules/home";

export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceAction(res));
    });
    getHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getHotRecommendData().then((res) => {
      dispatch(changeRecommendAction(res));
    });
    getDiscountData().then((res) => {
      dispatch(changeDiscountAction(res));
    });
    getLongforData().then((res) => {
      dispatch(changeLongforAction(res));
    });
    getPlusData().then((res) => {
      dispatch(changePlusAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScore: {},
    recommend: {},
    discount: {},
    longfor: {},
    plus: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScore = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommend = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.discount = payload;
    },
    changeLongforAction(state, { payload }) {
      state.longfor = payload;
    },
    changePlusAction(state, { payload }) {
      state.plus = payload;
    },
  },
});

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeRecommendAction,
  changeDiscountAction,
  changeLongforAction,
  changePlusAction,
} = homeSlice.actions;

export default homeSlice.reducer;

