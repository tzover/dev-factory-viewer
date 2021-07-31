import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer, MainContainer } from './styles/GlobalStyle'
import Header from './components/organisms/Header'
import Routers from './components/router/Router'
import Footer from './components/organisms/Footer'

// initialize
const appName: string = 'Factory Viewer'
const creater: string = '© AsnEdgeCloudTeam - 2021'

// Main
const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Header title={appName} />
      <MainContainer>
        <Routers />
      </MainContainer>
      <Footer title={creater} />
    </BrowserRouter>
  </AppContainer>
)

export default App
