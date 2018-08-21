import * as React from 'react';
import { Link } from 'react-router-dom';

import { map } from 'lodash';
import ButtonBuy from '../widgets/ButtonBuy';
import { coursePath } from '../../../helpers/routes';

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

export default function CoursesPage(props: Props) {
  return (
    <ul style={ulStyle}>
      {map(props.items, (item, key) => (
        <li style={liStyle} key={key}>
          <h3>
            <Link to={coursePath(key)}>{item.title}</Link>
          </h3>
          <p>{item.description}</p>
          <ButtonBuy item={item} />
        </li>
      ))}
    </ul>
  );
}
