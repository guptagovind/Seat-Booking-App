import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Base from './Base';
import NotFoundPage from './NotFoundPage';

export const history = createHistory();


class App extends Component {
  routes = () => (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Base} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );

  render() {
    return (
        <div>
          {this.routes()}
        </div>
    );
  }
}



export default App;
