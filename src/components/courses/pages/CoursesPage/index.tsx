import * as React from 'react';
import { AppContextConsumer } from '../../../../app/context';

import { map } from 'lodash';

export interface Props {
  items: {
    picture: string;
    title: string;
    description: string;
    type: string;
    rating: number;
    reviews: number;
  }[];
}

export function CoursesPage(props: Props) {
  return (
    <AppContextConsumer>
      {context => (
        <ul>
          {map(props.items, (item, key) => (
            <li key={key}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => context.updateCard(item)}>
                Add to card
              </button>
            </li>
          ))}
        </ul>
      )}
    </AppContextConsumer>
  );
}
