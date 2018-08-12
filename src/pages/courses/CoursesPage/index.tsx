import * as React from 'react';

import { map } from 'lodash';
import ButtonBuy from '../widgets/ButtonBuy';

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
    <ul>
      {map(props.items, (item, key) => (
        <li key={key}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ButtonBuy id={key} />
        </li>
      ))}
    </ul>
  );
}
