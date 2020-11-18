import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.2,
        backgroundColor: '#fff',
        borderColor: '#1A91EB',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#1A91EB',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#1A91EB',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [30, 300, 20, 360, 80, 100, 80, 200]
      },
    ]
  };

  return (
    <ChartsWrapper>
      <div className="container">
        <Line data={data} options={{responsive: true}}/>
      </div>
    </ChartsWrapper>     
  )
}

const ChartsWrapper = styled.div`
  .container {
    background-color: #fff;
    width: 100%;
    @media screen and (max-width: 1595px) {
  		width: 60vw;
		}
    .chartjs-render-monitor {
      height: 320px !important;
    }
  }
`

export default Chart;