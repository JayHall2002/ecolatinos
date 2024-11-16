import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

// This Bar chart renders data from a Pew Research Survey that shows that Latinos are more concerned 
// about the environment than any other population.
const MyBarChart = () => {
    // The issues that Latinos care about the most.
    const labels = ['Non-Latinos', 'Latinos'];
    // Data on the percentages of Latinos and non-Latinos who care about the environment.
    const datasets = [
        {
            label: 'Non-Latinos',
            data: [38, 17],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Latinos',
            data: [62, 83],
            backgroundColor: 'rgb(54, 162, 235)',
        },
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
                    text: "Percentage of people concerned",
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
                    text: "People Category",
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
                text: "Global Warming is more important to Latinos than any other minority.",
                font: {
                    size: 28, 
                },
                color: 'black'
            }
        },
        
    };
    // Display the Bar chart to screen.
    return (
        <div style={{display: 'flex', alignItems: 'center', width: '1200px', height: '800px'}}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MyBarChart;
