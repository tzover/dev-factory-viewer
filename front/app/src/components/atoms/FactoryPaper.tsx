import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

// Style
const FactoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const DCMPaper = styled(Paper)`
  margin: 0.5em;
  width: 16%;
  height: 20vh;
`
const OPPaper = styled(Paper)`
  margin: 0.5em 0.2em;
  width: 12%;
  height: 10vh;
`

export const FactoryPaper1: React.FC = () => (
  <FactoryContainer>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_1
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_2
    </DCMPaper>

    <DCMPaper elevation={10} variant='outlined'>
      DCM_3
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_5
    </DCMPaper>
  </FactoryContainer>
)
export const FactoryPaper2: React.FC = () => (
  <FactoryContainer>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_6
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_7
    </DCMPaper>

    <DCMPaper elevation={10} variant='outlined'>
      DCM_8
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_10
    </DCMPaper>
  </FactoryContainer>
)
export const FactoryPaper3: React.FC = () => (
  <FactoryContainer>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_11
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_12
    </DCMPaper>

    <DCMPaper elevation={10} variant='outlined'>
      DCM_13
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_14
    </DCMPaper>
  </FactoryContainer>
)
export const FactoryPaper4: React.FC = () => (
  <FactoryContainer>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_15
    </DCMPaper>
    <OPPaper elevation={10} variant='outlined'>
      OP
    </OPPaper>
    <DCMPaper elevation={10} variant='outlined'>
      DCM_16
    </DCMPaper>
  </FactoryContainer>
)
