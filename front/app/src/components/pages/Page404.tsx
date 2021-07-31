import React from 'react'
import styled from 'styled-components'
import SubTitle from '../atoms/SubTitle'

// Style
const ExplainContainer = styled.div`
  text-align: center;
`

// Main
const Page404: React.FC = () => (
  <>
    <SubTitle title='Page404' />
    <ExplainContainer>
      <h2>Page not found</h2>
      <h2>This Page is 404</h2>
    </ExplainContainer>
  </>
)

export default Page404
