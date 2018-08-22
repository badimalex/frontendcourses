import * as React from 'react';
import { Link } from 'react-router-dom';

import { Cart } from './Cart';
import { cartPath } from '../helpers/routes';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="cart">
        <Link to={cartPath()}>
          <Cart />
        </Link>
      </div>
    </header>
  );
}
