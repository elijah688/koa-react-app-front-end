import React from 'react';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <ReactRouter>
    {routes.map(({ path, component }) => (
      <Route key={path} exact path={path} component={component}> 
        {component}
      </Route>
    ))}
  </ReactRouter>
);

export default Router;
