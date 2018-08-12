import * as React from 'react';
import './style.css';

import { CoursesPage } from '../pages/courses/CoursesPage/index';
import { AppContextProvider } from './context';
import { Header } from './Header';
import { list } from './courses';

interface State {
  items: object[];
}

class App extends React.PureComponent {
  readonly state: State = { items: [] };

  updateCard = (event: React.MouseEvent<HTMLElement>) => {
    const index = event.currentTarget.attributes[0].value;
    this.setState({
      items: this.state.items.concat([list[index]])
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
            <CoursesPage items={list} />
          </div>
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
