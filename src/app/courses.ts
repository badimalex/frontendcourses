import courses from '../constants/courses';

let initialValue: any = {};

export const list = courses.reduce((result, value, key) => {
  result[key] = value;
  return result;
}, initialValue);
