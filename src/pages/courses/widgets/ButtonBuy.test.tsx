import * as React from 'react';

import { mount } from 'enzyme';

import { AppContextProvider } from '../../../app/context';

import ButtonBuy from './ButtonBuy';

const updateCard = jest.fn();
const item = { id: 1 };

describe('ButtonBuy', () => {
  const app = mount(
    <div>
      <AppContextProvider
        value={{
          cartItems: [],
          updateCard
        }}
      >
        <ButtonBuy item={item} />
      </AppContextProvider>
    </div>
  );

  it('render button', () => {
    expect(app.find('button').text()).toEqual('Add to card');
  });

  it('updateCard', () => {
    app.find('button').simulate('click');
    expect(updateCard).toHaveBeenCalledWith(item);
  });
});
