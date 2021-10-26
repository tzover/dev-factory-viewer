import React from 'react'
import styled from 'styled-components'

interface Props {
  subTitle?: string
}

const SubTitle: React.FC<Props> = (props) => {
  const { subTitle } = props
  return (
    <div className='flex w-screen'>
      <TextTitle>{subTitle}</TextTitle>
    </div>
  )
}

export default SubTitle

// Styled-Components
const TextTitle: React.FC = styled.h2`
  padding: 1rem;
  margin: 1rem 3rem;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  color: black;
  &::after {
    content: '';
    display: block;
    height: 0.1rem;
    background-color: black;
    margin-top: 1rem;
  }
`
