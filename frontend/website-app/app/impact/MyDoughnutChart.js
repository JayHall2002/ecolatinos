import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

import { Poppins } from "next/font/google";
import { Lato } from 'next/font/google';


const poppins = Poppins({
  weight: "900",
  subsets: ['latin'],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

  
ChartJS.register(
    ArcElement, 
    Tooltip,
    Legend
);
  
const MyDoughnutChart = () => {
    /* This Doughnut Chart is meant to signify that EcoLatinos motivates 34 people to join the Landscaping program. */
    /* The code below */
    const data = {
      labels: ["Participated", "Not Participated"],
      datasets: [{
        label: "Participants",
        data: [34, 2],
        backgroundColor: ['blue', 'grey'],
        borderColor: ['blue', 'grey']
      }]
    }
  
    const options = {
        plugins: {
            // This line of code sets the options for legend and title of graph.
            legend: {
                position: 'right',
                align: 'center',
                labels: {
                    font: {
                        size: 18, // Change the font size of the legend labels
                    },
                },
            },
            title: {
                display: true,
                text: "Number of registered participants in Equitable Landscaping Program",
                font: {
                    size: 28, 
                },
                color: 'black'
            }
        },
        layout: {
          padding: {
            bottom: -5,
            top: -10,
          }
        },
    }
  
    return (
      <div className="App">
        <div style={{display:"flex", width: "60%", height: "50%", margin: "360px", paddingBottom: "1rem"}} className={`text-2xl tracking-widest leading-loose text-white ${lato.className}`}>
          <Doughnut data={data} options={options}>
          
          </Doughnut>
        </div>
      </div>
    );
}

export default MyDoughnutChart;
  