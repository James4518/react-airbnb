import PropTypes from 'prop-types'
import React, { memo, useMemo } from 'react'
import { FooterWrapper } from './style'
import IconMore from "@/assets/icons/more";
import { useNavigate } from 'react-router-dom';

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();
  const showMessage = useMemo(() => {
    return name ? `显示更多${name}房源` : "显示全部";
  }, [name]);
  const moreClick = () => {
    navigate("/entire");
  };
  
  return (
    <FooterWrapper  color={name ? "#00848A": "#000"}>
    <div className="info" onClick={moreClick}>
      <span className="text">{showMessage}</span>
      <IconMore/>
    </div>
  </FooterWrapper>
  )
})
 SectionFooter.propTypes = {
  name: PropTypes.string
 }

export default SectionFooter