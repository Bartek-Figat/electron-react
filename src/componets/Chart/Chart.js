import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export const ChartDashborad = ({ children, ...res }) => {
  const options = {
    chart: {
      id: 'basic-bar',
      background: '#fff',
      offsetX: 10,
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    colors: ['#006992'],
  };

  const series = [
    {
      name: 'series-1',
      data: [10, 20, 30, 40, 50, 20, 40, 80, 90, 90, 110, 80],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" width="99%" height="400px" />
        </div>
      </div>
    </div>
  );
};
