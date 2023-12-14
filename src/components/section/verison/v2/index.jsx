import PropTypes from "prop-types";
import React, { memo } from "react";
import Section2Wrapper from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import ListItem from "@/base-ui/list/listItem";

const Section2 = memo((props) => {
  const { data } = props;
  return (
    <Section2Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <ScrollView>
          {data.list.map((item) => {
            return (
              <ListItem
                itemData={item}
                itemWidth="20%"
                key={item.id}
              ></ListItem>
            );
          })}
        </ScrollView>
      <SectionFooter />
    </Section2Wrapper>
  );
});

Section2.propTypes = {
  data: PropTypes.object,
};

export default Section2;

