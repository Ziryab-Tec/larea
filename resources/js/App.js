//  require('../bootstrap');

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import store from './store';
// import Reducers from './reducers';
// import './app.scss';
import '../scss/style.scss'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('app'));