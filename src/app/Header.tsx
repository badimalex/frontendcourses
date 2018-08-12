import * as React from 'react';
import { Cart } from './Cart';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="cart">
        <Cart />
      </div>
    </header>
  );
}
