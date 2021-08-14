import React from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss';

export const YearSelector = ({ teamName }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  console.log('Start Year' + startYear);
  console.log('End Year' + endYear);

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  console.log('year:' + years);
  return (
    <ol className='YearSelector'>
      {years.map((year) => (
        <li key={year}>
          <Link to={`/team/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
};
