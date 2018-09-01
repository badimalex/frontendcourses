import * as React from 'react';

import CoursesPage from '../pages/courses/CoursesPage/index';
import { AppContextProvider } from './context';
import { Header } from './Header';
import ProductsPage from '../pages/products/list/Container';
import { list } from './courses';
import { Divider } from 'antd';

interface State {
  items: object[];
}

class App extends React.PureComponent {
  readonly state: State = { items: [] };

  updateCard = (item: object) => {
    this.setState({
      items: this.state.items.concat([item])
    });
  };

  render() {
    return (
      <AppContextProvider
        value={{
          cartItems: this.state.items,
          updateCard: this.updateCard
        }}
      >
        <div className="container">
          <Header />
          <div className="row">
            <ProductsPage />
            <Divider />
            <CoursesPage items={list} />
          </div>
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
