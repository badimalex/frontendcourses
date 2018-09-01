import * as React from 'react';
const contentful = require('contentful');

import Item from './index';

const client = contentful.createClient({
  space: 'o2jd7hq1ac7a',
  accessToken:
    'b14cdb796bed28faea598c6c18ab89d9d71347eadc387ab82cbc11a89e24d4c0',
  host: 'preview.contentful.com'
});

export interface IAppProps {}

interface IState {
  item: any;
}

class IApp extends React.Component<any, any> {
  public state: IState = {
    item: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    client
      .getEntries({
        content_type: 'product'
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

export default IApp;
