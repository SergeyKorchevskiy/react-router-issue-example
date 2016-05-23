import React from 'react'
import App from './containers/App'
import { Route, IndexRoute } from 'react-router'
import { Home, Token } from './components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/token/:access_token" component={Token} />
  </Route >
)
