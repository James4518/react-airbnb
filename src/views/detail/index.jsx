import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";
import { DetailWrapper } from "./style";
import DetailPictures from "./cpns/detail-pictures";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  );
});

export default Detail;
