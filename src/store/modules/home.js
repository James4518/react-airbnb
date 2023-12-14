import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoodPriceData, getPlusData } from "@/network/modules/home";

export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceAction(res));
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
    plus: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPrice = payload;
    },
    changePlusAction(state, { payload }) {
      state.plus = payload;
    }
  },
});

export const { changeGoodPriceAction, changePlusAction } = homeSlice.actions;
export default homeSlice.reducer;

