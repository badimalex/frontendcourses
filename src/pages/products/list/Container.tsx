import * as React from 'react';

import List from './index';
import { fetchRequest } from 'helpers/contentful';

export interface IAppProps {}

interface IPost {
  fields: {
    title: string;
    description: string;
    images: [];
  };
}

interface IState {
  items: IPost[];
}

class ProductListContainer extends React.Component<IAppProps, any> {
  public state: IState = {
    items: []
  };

  async getData() {
    const data = await fetchRequest({
      contentType: 'product'
    });
    this.setState({
      items: data.items
    });
  }

  componentDidMount() {
    this.getData();
  }

  public render() {
    return (
      <div>{this.state.items.length && <List items={this.state.items} />}</div>
    );
  }
}

export default ProductListContainer;
