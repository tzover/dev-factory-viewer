import React, { memo } from 'react'
import styled from 'styled-components'

// Style
const AppContainerStyle = styled.div`
  min-height: 500px;
`
const MainContainerStyle = styled.div`
  margin: 5em 0;
  /* background-color: lightgray; // test */
`

// Main
export const AppContainer: React.FC = memo(({ children }) => (
  <AppContainerStyle>{children}</AppContainerStyle>
))
export const MainContainer: React.FC = memo(({ children }) => (
  <MainContainerStyle>{children}</MainContainerStyle>
))
