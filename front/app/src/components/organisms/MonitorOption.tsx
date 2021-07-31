import React from 'react'
import styled from 'styled-components'
import MonitorMenu from '../atoms/MonitorMenu'

// interface
interface MonitorOptionIF {
  activeEdge: number
}

// Style
const ActiveEdgeDetail = styled.div`
  text-align: end;
  margin: 0 1rem 1rem 0;
`

// Main
const MonitorOption: React.FC<MonitorOptionIF> = ({ activeEdge }) => (
  <>
    <ActiveEdgeDetail>Active Monitors: {activeEdge}</ActiveEdgeDetail>
    <MonitorMenu />
  </>
)

export default MonitorOption
