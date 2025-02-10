'use client'
import React, { useState } from 'react'
import Chart from "react-apexcharts";

function SalesGraph() {
    const [chartData, setChartData] = useState({
        options:{
            plotOptions:{
                bar:{
                    columnWidth : "40%",
                    barGap: "5%"
                }
            },
            chart:{
                id: "sales-bar"
            },
            dataLabels: {
                enabled: false
            },
            yaxis: {
                labels: {
                  formatter: (value) => `${value}K` // Customizes the Y-axis labels
                }
              },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                labels: {
                    style:{
                        fontSize: "10px",
                        colors: "#9c9b98"
                    }
                }
            },
            colors:["#03a1fc","#6acf38" ]
        },
        series:[
            {
                name: "Online Sales" ,
                data: [14, 17, 6, 16, 12, 17, 21 ]
            },
            {
                name: "Offline Sales",
                data: [13, 12, 23, 6, 11, 14, 11]
            }
        ]
    })
  return (
   <div className='graph rounded-md border-t-[1px] shadow-lg w-[100%] '>
    <div className='row'>
        <div className='mixed-chart'>
            <Chart options={chartData.options} series={chartData.series} type="bar" width="500" />
        </div>

    </div>
    
   </div>
  )
}

export default SalesGraph
