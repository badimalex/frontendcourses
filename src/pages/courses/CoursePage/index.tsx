import * as React from 'react';
import { list } from '../../../app/courses';

function CoursePage(props: any) {
  const id = props.match.params.id;
  const item = list[id];

  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default CoursePage;
