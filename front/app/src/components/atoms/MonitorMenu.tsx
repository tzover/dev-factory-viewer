import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'

// Style
const MenuContainer = styled.div`
  margin-bottom: 1rem;
`

// Main
const MonitorMenu: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    // console.log(newValue) // index number
    setValue(newValue)
  }

  return (
    <MenuContainer>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
        >
          <Tab label='Factory' />
          <Tab label='DCM_#1' />
          <Tab label='DCM_#2' />
          <Tab label='DCM_#3' />
          <Tab label='DCM_#5' />
          <Tab label='DCM_#6' />
          <Tab label='DCM_#7' />
          <Tab label='DCM_#8' />
          <Tab label='DCM_#10' />
          <Tab label='DCM_#11' />
          <Tab label='DCM_#12' />
          <Tab label='DCM_#13' />
          <Tab label='DCM_#14' />
          <Tab label='DCM_#15' />
          <Tab label='DCM_#16' />
        </Tabs>
      </AppBar>
    </MenuContainer>
  )
}

export default MonitorMenu
