import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function BarChart(props) {
    let data = { "labels": props.names, "datasets": [{ "label": props.ylabel, "data": props.values }] }
    let options={"title":{
              "display":props.displayTitle,
              "text":props.title,
              "fontSize":25
            }}
    return (
        <div>
            <Bar
                data={data}
                height={480}
                width={600}
                options={options}
            >

            </Bar>
        </div>
    );
}
export default BarChart;