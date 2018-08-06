import * as React from 'react';

import './style.css';

import courses from '../constants/courses';
import { CoursesPage } from '../components/courses/pages/CoursesPage/index';

export function App() {
  return (
    <div className="container">
      <CoursesPage items={courses} />
    </div>
  );
}
