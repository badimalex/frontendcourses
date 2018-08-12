import * as React from 'react';
import { AppContextConsumer } from '../../../app/context';

export default function IApp(props: any) {
  return (
    <AppContextConsumer>
      {context => (
        <button data-id={props.id} onClick={context.updateCard}>
          Add to card
        </button>
      )}
    </AppContextConsumer>
  );
}
