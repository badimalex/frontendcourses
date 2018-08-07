import * as React from 'react';
import { Avatar, Badge } from 'antd';
import { AppContextConsumer } from './context';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <AppContextConsumer>
      {context => (
        <header className="header">
          <div className="cart">
            <Badge count={context.cartItems.length}>
              <Avatar shape="square" icon="shopping-cart" />
            </Badge>
          </div>
        </header>
      )}
    </AppContextConsumer>
  );
}
