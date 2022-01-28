import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from '../../images/Aisin_logo.svg'

// interface
interface HeaderIF {
  title: string
}

// Style
const HeaderArea = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;

  background: #88ccff;

  position: fixed;
  top: 0;
  z-index: 1;
`
const HeaderImg = styled.div`
  width: 15%;
  margin: 1em;
  padding: 1em;
`
const HeaderTitleArea = styled.div`
  flex: 1;
  text-align: center;
`
const HeaderTitleText = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
`

// Main
const Header: React.FC<HeaderIF> = ({ title }) => {
  const history = useHistory()

  const onClickImage = useCallback(() => {
    history.push('/')
  }, [])

  return (
    <HeaderArea>
      
      <HeaderImg onClick={onClickImage} >TopPage</HeaderImg>
      <HeaderTitleArea>
        <HeaderTitleText>{title}</HeaderTitleText>
      </HeaderTitleArea>
    </HeaderArea>
  )
}

export default Header
