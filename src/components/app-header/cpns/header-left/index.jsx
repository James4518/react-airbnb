import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from 'icons/logo'

const Left = memo(() => {
  return (
    <LeftWrapper>
      <IconLogo />
    </LeftWrapper>
  )
})

export default Left