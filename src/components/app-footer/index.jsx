import React, { memo } from "react";
import { FooterWrapper } from "./style";
import footerData from "@/assets/data/footer";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.name}>
                <span className="name">{item.name}</span>
                {item.list.map((item) => {
                  return (
                    <span className="list" key={item}>
                      {item}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="information">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
