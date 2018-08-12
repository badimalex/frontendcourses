import * as React from 'react';

import { mount, shallow } from 'enzyme';
import { list } from '../../../app/courses';
import courses from '../../../constants/courses';

import CoursesPage from './index';

describe('CoursesPage', () => {
  const app = shallow(<CoursesPage items={list} />);

  it('renders the correct number of links', () => {
    expect(app.find('h3').length).toEqual(courses.length);
  });

  it('renders title', () => {
    expect(
      app
        .find('h3')
        .at(0)
        .text()
    ).toEqual(courses[0].title);
  });
});
