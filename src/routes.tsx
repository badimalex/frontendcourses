import * as React from 'react';

import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { cartPath, rootPath, coursePath } from './helpers/routes';
import { renderRoutes } from 'react-router-config';

import App from './app/index';
import CoursePage from './pages/courses/CoursePage';

export interface IAppProps {}

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: rootPath(),
        exact: true,
        component: App
      },
      {
        path: cartPath(),
        component: CartComponent
      },
      {
        path: coursePath(),
        component: CoursePage
      },
      {
        component: NotFound
      }
    ]
  }
];

function Root(props: any) {
  return (
    <div>
      <nav>
        <Link to={rootPath()}>Main page</Link>
        <Link to={cartPath()}>Cart page</Link>
      </nav>
      <Switch>{renderRoutes(props.route.routes)}</Switch>
    </div>
  );
}

function CartComponent(props: any) {
  return <div>CartComponent</div>;
}

function NotFound(props: any) {
  return <div>NotFound</div>;
}
