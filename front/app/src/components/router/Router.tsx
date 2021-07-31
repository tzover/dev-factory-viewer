import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DefectiveMap from '../pages/DefectiveMap'
import Home from '../pages/Home'
import Monitor from '../pages/Monitor'
import Page404 from '../pages/Page404'
import ProductionPlan from '../pages/ProductionPlan'
import StaffLayout from '../pages/StaffLayout'

const Routers: React.FC = () => (
  <Switch>
    <Route exact path='/' render={() => <Home />} />
    <Route path='/monitor' render={() => <Monitor />} />
    <Route path='/staff-layout' render={() => <StaffLayout />} />
    <Route path='/prod-plan' render={() => <ProductionPlan />} />
    <Route path='/defective-map' render={() => <DefectiveMap />} />
    <Route path='*' render={() => <Page404 />} />
  </Switch>
)

export default Routers
