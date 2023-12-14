import PropTypes from "prop-types";
import React, { memo } from "react";
import { Section1Wrapper } from "./style";
import List from "@/base-ui/list";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";

const Section1 = memo((props) => {
  const { data, name } = props;
  return (
    <Section1Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle}></SectionHeader>
      <List list={data.list}></List>
      <SectionFooter name={name}></SectionFooter>
    </Section1Wrapper>
  );
});

Section1.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string
};

export default Section1;

