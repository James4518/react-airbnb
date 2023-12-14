import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { Section3Wrapper } from './style';
import SectionHeader from "@/components/section-header";
import SectionTab from '@/components/section-tab';
import List from "@/base-ui/list";
import SectionFooter from "@/components/section-footer";

const Section3 = memo((props) => {
  const { data } = props;
  const initName = Object.keys(data.dest_list)[0];
  const [name, setName] = useState(initName);
  const tabNames = data.dest_address?.map(item => item.name);
  const tabClickHandle = useCallback((item) => {
    setName(item);
  }, [])
  
  return (
    <Section3Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle}/>
      <SectionTab tabNames={tabNames} tabClick={tabClickHandle}/>
      <List list={data.dest_list?.[name]} itemWidth="33.3%"/>
      <SectionFooter name={name}/>
    </Section3Wrapper>
  )
})

Section3.propTypes = {
  data: PropTypes.object
}

export default Section3;