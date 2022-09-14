import React, { Fragment } from 'react';
import Day from './Day';

export default function Month({ month }) {
  return (
    <div className="month-grid">
      {month.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
