import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from "./style";

const SearchSection = memo((props) => {
  const { searchInfos } = props;
  return (
    <SectionWrapper>
      {
        searchInfos.map((item,index) => {
          return (
            <div className="item" key={index}>
              <div className="info">
                <span className="title">{item.title}</span>
                <span className="desc">{item.desc}</span>
              </div>
              { index !== searchInfos.length - 1 && <div className='divider'></div>}
            </div>
          )
        })
      }
    </SectionWrapper>
  )
})

SearchSection.propTypes = {
  searchInfos: PropTypes.array
}

export default SearchSection