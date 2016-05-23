import React from 'react'
import reactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, useRouterHistory , browserHistory } from 'react-router'
import { createHistory } from 'history'

// import promise from 'redux-promise'
import thunk from 'redux-thunk'
import routes from './routes'
import reducers from './reducers'

// const middleware = [promise]
const middleware = [thunk]

const finalCreateStore = compose(
  applyMiddleware(
    ...middleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(reducers)

/* const browserHistory = useRouterHistory(createHistory)({
    basename: document.getElementsByTagName('base')[0].getAttribute('href')
})*/

reactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
