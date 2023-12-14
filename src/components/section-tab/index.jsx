import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames';
import { TabWrapper } from './style';
import ScrollView from "@/base-ui/scroll-view";

const SectionTab = memo((props) => {
  const { tabNames = [], tabClick} = props;
  const [currentIndex,setCurrentIndex] = useState(0);
  const itemClickHandle = (item, index) => {
    setCurrentIndex(index);
    tabClick(item);
  }
  return (
    <TabWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                className={classNames("item", {active: currentIndex === index})}
                onClick={() => itemClickHandle(item, index)}
                key={index}
                >{item}</div>
            )
          })
        }
      </ScrollView>
    </TabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTab