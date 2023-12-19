import React, { memo, useEffect } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getEntireData } from "@/store/modules/entire";

const EntirePagination = memo(() => {
  const { totalCount, roomList, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      roomList: state.entire.rooms,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntireData());
  }, [dispatch]);
  const pageChangeHandle = (event, pageCount) => {
    window.scrollTo(0, 0);
    dispatch(getEntireData(pageCount - 1));
  };
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="pagination">
          <Pagination
            count={totalPage}
            onChange={pageChangeHandle}
          ></Pagination>
          <span className="desc">
            第{startCount}-{endCount}个房源,共计{totalCount}
          </span>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;

