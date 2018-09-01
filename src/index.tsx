import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { routes } from './routes';

ReactDOM.render(
  <Router>{renderRoutes(routes)}</Router>,
  document.getElementById('root')
);
