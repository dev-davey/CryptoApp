import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
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
            
            return chartData
            }     
    }

    let chartLength = () => {
      if (props.coinData){
        let chartData = props?.coinData?.prices
        let newArr = []
        for (var i = 0; i <chartData.length; i++ ){
          newArr.push(i)
        }
        return newArr
      }
      else{
        return null
      }
    }



    let volInfo = () => {
        if (props.coinData){
            let volumeData = props?.coinData?.total_volumes?.map(volume =>
                volume = volume[1]
                ) 
            return volumeData
            }     
    }

    const data = {
        labels: chartLength(),
        datasets: [
          {
            label: 'Price Action',
            data: chartInfo(),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.6)',
            pointRadius: 1
          },
        ],
      };
    const volumeData = {
        labels: chartLength(),
        datasets: [
          {
            label: 'Trading Volume',
            data: volInfo(),
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
            <Bar data={volumeData} options={options}/>
        </div>
    )
}





