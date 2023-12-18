import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from 'icons/logo'
import { useNavigate } from 'react-router-dom'

const Left = memo(() => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClick}>
      <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default Left