import * as React from 'react';

import './style.css';

import courses from '../constants/courses';

import { CoursesPage } from '../components/courses/pages/CoursesPage/index';
import { AppContextProvider } from './context';
import { Header } from './Header';

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
            <CoursesPage items={courses} />
          </div>
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
