import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "./longfor-item";

const Longfor = memo((props) => {
  const { data } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {data.list.map((item) => {
            return <LongforItem itemData={item} key={item.city}></LongforItem>;
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </LongforWrapper>
  );
});

Longfor.propTypes = {
  data: PropTypes.object,
};

export default Longfor;
