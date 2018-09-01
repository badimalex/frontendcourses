import * as React from 'react';
const contentful = require('contentful');

import List from './index';

const client = contentful.createClient({
  space: 'o2jd7hq1ac7a',
  accessToken:
    'b14cdb796bed28faea598c6c18ab89d9d71347eadc387ab82cbc11a89e24d4c0',
  host: 'preview.contentful.com'
});

export interface IAppProps {}

interface IState {
  items: [];
}

class IApp extends React.Component<IAppProps, any> {
  public state: IState = {
    items: []
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: 'product'
      })
      .then((response: any) =>
        this.setState({
          items: response.items
        })
      )
      .catch(console.error);
  }

  public render() {
    return (
      <div>{this.state.items.length && <List items={this.state.items} />}</div>
    );
  }
}

export default IApp;
