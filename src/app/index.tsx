import * as React from 'react';
import { connect } from 'react-redux';

import CoursesPage from '../pages/courses/CoursesPage/index';
import { AppContextProvider } from './context';
import { Header } from './Header';
import { bindActionCreators, Dispatch } from 'redux';

import ProductsPage from '../pages/products/list/index';
import { getProducts, addToCard } from '../actions/index';

interface IProps {
  getProducts: Function;
  addToCard: Function;
  items: [];
  cart: [];
}

class App extends React.PureComponent<IProps, any> {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <AppContextProvider
        value={{
          cart: this.props.cart
        }}
      >
        <div className="container">
          <Header />
          <div className="row">
            {this.props.items && (
              <ProductsPage
                addToCard={this.props.addToCard}
                items={this.props.items}
              />
            )}
          </div>
        </div>
      </AppContextProvider>
    );
  }
}

interface IStateProps {
  card: [];
  products: { items: [] };
}

const mapStateToProps = (state: IStateProps) => ({
  items: state.products.items,
  cart: state.card
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getProducts,
      addToCard
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
