import * as React from 'react';
import { AppContextConsumer } from '../../../app/context';

export default function ButtonBuy(props: any) {
  return (
    <AppContextConsumer>
      {context => (
        <button
          className="button-buy"
          onClick={() => context.updateCard(props.item)}
        >
          Add to card
        </button>
      )}
    </AppContextConsumer>
  );
}
