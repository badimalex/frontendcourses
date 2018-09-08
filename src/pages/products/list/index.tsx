import * as React from 'react';
import { Link } from 'react-router-dom';
import { productPath } from 'helpers/routes';
import ButtonBuy from '../../courses/widgets/ButtonBuy';

export interface IAppProps {
  items: Item[];
  addToCard: Function;
}

interface Item {
  fields: {
    title: string;
    description: string;
    images: [];
  };
}

const style = {
  listStyle: 'none'
};

const listStyle = {
  padding: '0'
};

export default function ProductList(props: IAppProps) {
  return (
    <ul style={listStyle}>
      {props.items.map((item, key) => (
        <li style={style} key={key}>
          <h3>
            <Link to={productPath(key)}>{item.fields.title}</Link>
          </h3>
          <p>{item.fields.description}</p>
          <p>
            <ButtonBuy item={item} addToCard={props.addToCard} />
          </p>
        </li>
      ))}
    </ul>
  );
}
