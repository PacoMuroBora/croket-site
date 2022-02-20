import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

const routes = [
  {
    exact: true,
    path: '/',
    component: () => <Home />,
  },
  {
    exact: true,
    path: '/about',
    component: () => <About />,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* <Navbar /> */}</header>
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                render={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
