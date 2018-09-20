import * as React from 'react';

import { mount } from 'enzyme';

import { AppContextProvider } from './context';
import courses from '../constants/courses';

import { Cart } from './Cart';

describe('Cart', () => {
  const app = mount(
    <div>
      <AppContextProvider
        value={{
          cart: courses
        }}
      >
        <Cart />
      </AppContextProvider>
    </div>
  );

  it('renders a link home', () => {
    expect(app.find('Badge').props()).toMatchObject({
      count: courses.length
    });
  });
});
