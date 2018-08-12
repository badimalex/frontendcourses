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

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0
};

const liStyle = {
  margin: '12px 0 0 0'
};

export function CoursesPage(props: Props) {
  return (
    <ul style={ulStyle}>
      {map(props.items, (item, key) => (
        <li style={liStyle} key={key}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ButtonBuy id={key} />
        </li>
      ))}
    </ul>
  );
}
