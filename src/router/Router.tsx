import React, { FC } from 'react'
import { Redirect, Switch, Route, useLocation } from 'react-router'

import { routes } from './RouterConfig'

const Router: FC = () => {
  const location = useLocation()

  return (
    <Switch location={location}>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to='/' />
    </Switch>
  )
}

export default Router
