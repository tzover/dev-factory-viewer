import React from 'react'
import styled from 'styled-components'

// interface
interface SubTitleIF {
  title: string
}

// Style
const TitleContainer = styled.div`
  padding: 0.5rem;
`
const TextTitle: React.FC = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.2rem;
  margin: 1rem 2rem;
  &::before {
    content: attr(data-en);
    display: block;
    color: #88ccff;
    font-size: 1rem;
  }
  &::after {
    content: '';
    display: block;
    width: 30%;
    height: 0.15rem;
    background-color: #88ccff;
  }
`
// Main
const SubTitle: React.FC<SubTitleIF> = ({ title }) => (
  <TitleContainer>
    <TextTitle data-en='Sample'>{title}</TextTitle>
  </TitleContainer>
)

export default SubTitle
