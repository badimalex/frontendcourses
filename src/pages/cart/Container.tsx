import * as React from 'react';
import { Form } from './Form';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { submitForm } from '../../actions';

class Container extends React.Component<{ dispatch: Dispatch; order: {} }, {}> {
  onSubmit = (values: {}) => {
    this.props.dispatch(submitForm(values));
  };

  render() {
    return (
      <div>
        Order Form:
        <Form onSubmit={this.onSubmit} />
        Order values:
        {JSON.stringify(this.props.order)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    order: state.order
  };
};

export default connect(mapStateToProps)(Container);
