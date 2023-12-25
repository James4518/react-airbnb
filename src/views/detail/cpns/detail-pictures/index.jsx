import React, { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="picture" onClick={() => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls[0]} />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls.slice(1, 5).map((item) => {
            return (
              <div
                className="picture"
                onClick={() => setShowBrowser(true)}
                key={item}
              >
                <img src={item} />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
        <button className="show-btn" onClick={() => setShowBrowser(true)}>
          查看更多
        </button>
        {showBrowser && (
          <PictureBrowser
            pictureUrls={detailInfo.picture_urls}
            closeClick={()=> setShowBrowser(false)}
          ></PictureBrowser>
        )}
      </div>
    </PicturesWrapper>
  );
});

export default DetailPictures;

