import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { validate } from 'helpers/form-helper';

interface CustomProps {}

function renderField(props: {
  label: string;
  type: string;
  meta?: { touched: boolean; error: string; warning: boolean };
  input?: {};
}) {
  const { touched, error, warning } = props.meta;

  return (
    <div>
      <label>{props.label}</label>
      <div>
        <input {...props.input} placeholder={props.label} type={props.type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
}

class FormComponent extends React.PureComponent<
  CustomProps & InjectedFormProps<{}, CustomProps>
> {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <div>
            <Field
              name="username"
              component={renderField}
              type="text"
              label="Name"
            />
          </div>
        </div>
        <div>
          <label>Email:</label>
          <div>
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
            />
          </div>
        </div>
        <div>
          <label>Address</label>
          <div>
            <Field name="address" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export const Form = reduxForm<{}, CustomProps>({
  form: 'form',
  validate
})(FormComponent);
