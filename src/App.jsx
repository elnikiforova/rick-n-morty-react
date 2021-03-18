import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <>
        <Menu color="green" inverted widths={5}>
          <Menu.Item>
            <Link to="/">Scroll</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/details">Details</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact path="/">
            {' '}
            <FirstPage />
            {' '}
          </Route>
          <Route exact path="/details">
            {' '}
            <SecondPage />
            {' '}
          </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;
