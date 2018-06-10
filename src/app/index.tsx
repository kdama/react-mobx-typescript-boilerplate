import { History } from "history";
import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Router, Switch } from "react-router";

import Root from "app/containers/Root";
import TodoApp from "app/containers/TodoApp";

// render react DOM
export const App = hot(module)(({ history }: { history: History }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Root>
));
