import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
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




ChartJS.register(ArcElement, Tooltip, Legend);

/* TotalDonationChart is a pie chart that shows the amounts of donations 
made by different organizations as well as the importance of grants. This chart shows
how EcoLatinos has gathered funding from grants.*/

const TotalDonationsChart = () => {
    const data = {
        // The labels array contains the different sources of donations. 
      labels: ["Gateways Grant", "National Fish & Wildlife Foundation", "Foundation Grant", "Trash and Pickup Services", "Partnerships"],
      datasets: [
        {
          // Donation ammounts
          data: ['150000', '250000', '250000', '10000', '50000'],
          // Legend for the different categories.
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(161, 133, 43)',
            'rgb(51, 204, 153)',
            'rgb(102, 51, 204)'
          ],
          borderWidth: 1,
          borderColor: 'black'
        },
      ],
    };
    const options = {
        plugins: {
            /* Make the legend display. */
            legend: {
                display: true,
                font: {
                    size: 20,
                }
            },
            /* Add the $ sign at the end of the data labels.*/
            tooltip: {
                callbacks: {
                  label: (context) => `$${context.parsed}`, // Format tooltip with $ sign
                },
            },
            /* Set the following options for displaying the title. */
            title: {
                display: true,
                text: "Donations by Organization",
                font: {
                    size: 28,
                },
                color: 'black'
            },
        },
        layout: {
          padding: {
            bottom: -5,
            top: -10,
          }
        },
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', width: '1200px', height: '800px', margin: "360px"}} className={`text-2xl tracking-widest leading-loose text-white ${lato.className}`}>
            <Pie data={data} options={options}/>
        </div>
      
    )
  }
  
export default TotalDonationsChart;
