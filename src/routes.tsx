import * as React from 'react';

import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { cartPath, rootPath, coursePath, productPath } from './helpers/routes';
import { renderRoutes } from 'react-router-config';

import App from './app/index';
import CoursePage from './pages/courses/CoursePage';
import ProductPage from './pages/products/view/Container';
import CartContainer from './pages/cart/Container';

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
        component: CartContainer
      },
      {
        path: coursePath(),
        component: CoursePage
      },
      {
        path: productPath(),
        component: ProductPage
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

function NotFound(props: any) {
  return <div>NotFound</div>;
}
