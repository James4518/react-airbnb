import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoodPrice } from "@/network/modules/home";

export const fetchHomeData = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getGoodPrice().then((res) => {
      dispatch(changeGoodPriceAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPrice = payload;
    },
  },
});

export const { changeGoodPriceAction } = homeSlice.actions;
export default homeSlice.reducer;

