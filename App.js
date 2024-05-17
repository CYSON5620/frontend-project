// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Repositories from './Repositories';
import SingleRepo from './SingleRepo';
import NotFound from './NotFound';
import ErrorBoundary from './ErrorBoundary';
import CreateRepoModal from './CreateRepoModal';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ErrorBoundary>
            <Repositories />
          </ErrorBoundary>
        </Route>
        <Route path="/repo/:repoName">
          <ErrorBoundary>
            <SingleRepo />
          </ErrorBoundary>
        </Route>
        <Route path="/create-repo">
          <ErrorBoundary>
            <CreateRepoModal />
          </ErrorBoundary>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
