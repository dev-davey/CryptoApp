import React from 'react'
import { Line } from 'react-chartjs-2';
import '../css/Chart.css'

  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  

export default function chart(props) {

    let chartInfo = () => {
        if (props.coinData){
            let chartData = props?.coinData?.prices?.map(prices =>
                prices = prices[1]
                )
            console.log(chartData)  
            return chartData
            }     
    }

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ,'11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
          {
            label: '30 Day Price Action',
            data: chartInfo(),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.6)',
            pointRadius: 0
          },
        ],
      };

    return (
        <div className="chartContainer">
            <Line data={data}  options={options} />
        </div>
    )
}





