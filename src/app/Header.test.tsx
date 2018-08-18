import * as React from 'react';

import { shallow } from 'enzyme';

import { Header } from './Header';

const wrapper = shallow(<Header />);

test('contains a Header component', () => {
  expect(wrapper.find('Cart').exists()).toBe(true);
});
