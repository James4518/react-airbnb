import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper } from "./style";
import List from "@/base-ui/list";
import SectionHeader from "./cpns/section-header";
import SectionFooter from "./cpns/section-footer";

const Section = memo((props) => {
  const { data, name } = props;
  return (
    <SectionWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle}></SectionHeader>
      <List list={data.list}></List>
      <SectionFooter name={name}></SectionFooter>
    </SectionWrapper>
  );
});

Section.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string
};

export default Section;

