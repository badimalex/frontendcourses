import * as React from "react";

import Item from "./index";

import { fetchRequest } from "helpers/contentful";

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

  componentDidMount() {
    const id = this.props.match.params.id;
    fetchRequest({
      contentType: "product"
    })
      .then((response: any) =>
        this.setState({
          item: response.items[id].fields
        })
      )
      .catch(console.error);
  }

  public render() {
    return <div>{this.state.item && <Item {...this.state.item} />}</div>;
  }
}

export default ProductContainer;
