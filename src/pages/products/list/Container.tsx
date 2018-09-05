import * as React from "react";

import List from "./index";
import { fetchRequest } from "helpers/contentful";

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

  componentDidMount() {
    fetchRequest({
      contentType: "product"
    })
      .then((response: any) =>
        this.setState({
          items: response.items
        })
      )
      .catch(console.error);
  }

  public render() {
    console.log(this.state);
    return (
      <div>{this.state.items.length && <List items={this.state.items} />}</div>
    );
  }
}

export default ProductListContainer;
