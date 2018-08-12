import * as React from 'react';
import { Avatar, Badge } from 'antd';
import { AppContextConsumer } from './context';

export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <AppContextConsumer>
      {context => (
        <Badge count={context.cartItems.length}>
          <Avatar shape="square" icon="shopping-cart" />
        </Badge>
      )}
    </AppContextConsumer>
  );
}
