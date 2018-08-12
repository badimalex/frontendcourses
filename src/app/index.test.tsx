import * as React from 'react';

import { shallow, mount } from 'enzyme';
import { list } from './courses';

import App from './index';

const app = shallow(<App />);
const appMount = mount(<App />);

test('contains a Header component', () => {
  expect(app.find('Header').exists()).toBe(true);
});

test('contains a CoursesPage component', () => {
  expect(app.find('CoursesPage').exists()).toBe(true);
});

test('initializes the `state` with an empty list', () => {
  expect(app.state()).toEqual({ items: [] });
});

test('handle add item', () => {
  appMount
    .find('.button-buy')
    .at(0)
    .simulate('click');

  expect(appMount.state()).toEqual({ items: [list[0]] });
});
