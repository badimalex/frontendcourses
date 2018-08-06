import * as React from 'react';

import { map } from 'lodash';

export interface Props {
  items: {
    title: string;
    description: string;
  }[];
}

export function CoursesPage(props: Props) {
  return (
    <ul>
      {map(props.items, (item, key) => (
        <li key={key}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
