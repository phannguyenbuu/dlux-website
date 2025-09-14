import React from 'react';

const DonutChart = ({data, colors,outerRadius,innerRadius }) => {
//   const data = [20, 20, 20, 20, 20]; // 5 vùng bằng nhau
//   const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

  const total = data.reduce((acc, val) => acc + val, 0);

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const paths = data.map((slice, index) => {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += slice / total;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    // largeArcFlag nếu góc lớn hơn 180 độ
    const largeArcFlag = slice / total > 0.5 ? 1 : 0;

    // Định nghĩa bán kính ngoài và trong để tạo kiểu donut (hở biên và tâm)
    // const outerRadius = 100;
    // const innerRadius = 60;

    const pathData = [
      `M ${outerRadius * startX} ${outerRadius * startY}`, // điểm bắt đầu cung ngoài
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerRadius * endX} ${outerRadius * endY}`, // cung ngoài
      `L ${innerRadius * endX} ${innerRadius * endY}`, // nối về cung trong
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerRadius * startX} ${innerRadius * startY}`, // cung trong
      'Z' // đóng path
    ].join(' ');

    return <path key={index} d={pathData} fill={colors[index]} stroke="white" strokeWidth="12" />;
  });

  return (
    <svg width={outerRadius * 2} height={outerRadius * 2} 
        viewBox={`-${outerRadius} -${outerRadius} ${outerRadius * 2} ${outerRadius * 2}`}>
      {paths}
    </svg>
  );
};

export default DonutChart;
