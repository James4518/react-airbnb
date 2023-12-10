import React, { memo, useState, useEffect } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "icons/global";
import IconMenu from "icons/menu";
import IconAvatar from "icons/avatar";

const Right = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    function clickHandle() {
      setShowPanel(false);
    }
    window.addEventListener("click", clickHandle, true);
    return () => window.removeEventListener("click", clickHandle, true);
  }, []);
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={() => setShowPanel(true)}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <span className="item register">注册</span>
              <span className="item login">登录</span>
            </div>
            <div className="bottom">
              <span className="item">出租房源</span>
              <span className="item">开展体验</span>
              <span className="item">帮助</span>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default Right;

