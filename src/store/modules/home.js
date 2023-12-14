import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getGoodPriceData,
  getHotRecommendData,
  getPlusData,
} from "@/network/modules/home";

export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
  
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceAction(res));
    });
    getHotRecommendData().then((res) => {
      dispatch(changeRecommendAction(res));
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
    recommend: {},
    plus: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPrice = payload;
    },
    changeRecommendAction(state, { payload }) {
      state.recommend = payload;
    },
    changePlusAction(state, { payload }) {
      state.plus = payload;
    },
  },
});

export const {
  changeGoodPriceAction,
  changeRecommendAction,
  changePlusAction,
} = homeSlice.actions;

export default homeSlice.reducer;

