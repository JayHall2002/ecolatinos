import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Lato } from 'next/font/google';
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

const lato = Lato({
    weight: "400",
    subsets: ["latin"],
  });
  

// This Bar chart renders data from a Pew Research Survey that shows that Latinos are more concerned 
// about the environment than any other population.
const MyBarChart = () => {
    // The issues that Latinos care about the most.
    const labels = ['Non-Latinos', 'Latinos'];
    // Data on the percentages of Latinos and non-Latinos who care about the environment.
    const datasets = [
        {
            label: 'Not So Important',
            data: [38, 17],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Extremely Important',
            data: [62, 83],
            backgroundColor: 'rgb(73, 163, 242)',
        }
    ];
    // This is the data that gets fed into grapph. Labels is for the X-axis and datasets is for the y-axis. 
    const data = {
        labels: labels,
        datasets: datasets,
    };
    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "% of people who are concerned",
                    font: {
                        size: 18, // Change the font size of y-axis ticks
                    },
                    color: "black",
                },
                display: true,
                beginAtZero: true,
                max: 100,
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
                    color: "black",
                },
            },
            x: {
                // Add the title and modify the font size for the tick marks and the title label.
                title: {
                    display: true,
                    text: "Category of People",
                    font: {
                        size: 16,
                    },
                    color: "black",
                },
                display: true,
                beginAtZero: true,
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
                    color: "black",
                },
            },
        },
        plugins: {
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
                text: "Latinos are the most concerned about environmental issues",
                font: {
                    size: 18, 
                },
                color: "black",
            }
        },
        layout: {
            padding: {
              bottom: -5,
              top: -10,
            }
        },
    };
    // Display the Bar chart to screen.
    return (
        <div style={{display: 'flex', width: '1200px', height: '800px', margin: "360px", marginBottom: "6.5px"}} className={`text-2xl tracking-widest leading-loose text-white ${lato.className}`}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MyBarChart;
