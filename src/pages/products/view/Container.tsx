import * as React from 'react';

import Item from './index';

import { fetchRequest } from 'helpers/contentful';

export interface IAppProps {}

interface IState {
  item: {
    title: string;
    description: string;
    images: [];
  };
}

class ProductContainer extends React.Component<any, any> {
  public state: IState = {
    item: null
  };

  async getProduct() {
    const id = this.props.match.params.id;
    const data = await fetchRequest({
      contentType: 'product'
    });
    this.setState({
      item: data.items[id].fields
    });
  }

  componentDidMount() {
    this.getProduct();
  }

  public render() {
    return <div>{this.state.item && <Item {...this.state.item} />}</div>;
  }
}

export default ProductContainer;
