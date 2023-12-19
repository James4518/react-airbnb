import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRoomList } from "@/network/modules/entire";

export const getEntireData = createAsyncThunk(
  "fetchEntireData",
  (payload = 0, { dispatch }) => {
    getRoomList(payload * 20).then((res) => {
      dispatch(changeTotal(res.totalCount));
      dispatch(changeRooms(res.list));
      dispatch(changeCurrentPage(payload));
    });
  }
);
const entireSlice = createSlice({
  name: "entire",
  initialState: {
    totalCount: 0,
    rooms: [],
    currentPage: 0,
  },
  reducers: {
    changeTotal(state, { payload }) {
      state.totalCount = payload;
    },
    changeRooms(state, { payload }) {
      state.rooms = payload;
    },
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { changeTotal, changeRooms, changeCurrentPage } =
  entireSlice.actions;
export default entireSlice.reducer;

