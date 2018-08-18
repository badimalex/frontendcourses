import * as React from 'react';

import { mount } from 'enzyme';

import { AppContextProvider } from './context';
import courses from '../constants/courses';

import { Cart } from './Cart';

const updateCard = jest.fn();

describe('Cart', () => {
  const app = mount(
    <div>
      <AppContextProvider
        value={{
          cartItems: courses,
          updateCard
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
