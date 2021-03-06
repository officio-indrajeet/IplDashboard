import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export const WinLossComponent = (props) => {
  if (props == null || props.team == null) {
    return <></>;
  }
  return (
    <div className='win-loss-section'>
      <h5 style={{ margin: '10px' }}>Wins / Losses</h5>
      <PieChart
        data={[
          {
            title: 'Losses',
            value: props.team.totalMatches - props.team.totalWins,
            color: '#a34d5d',
          },
          { title: 'Wins', value: props.team.totalWins, color: '#4da375' },
        ]}
      />
    </div>
  );
};
