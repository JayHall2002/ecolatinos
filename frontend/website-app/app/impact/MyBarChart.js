import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

// This Bar chart renders data from a Pew Research Survey that shows that Latinos are more concerned 
// about the environment than any other population.
const MyBarChart = () => {
    // The issues that Latinos care about the most.
    const labels = ['Too much garbage', 'Water Pollution', 'Air Pollution', 'Drinking Water safety', 'Lack of greenspace and parks'];
    // Data on the percentages of Latinos and non-Latinos who care about the environment.
    const datasets = [
        {
            label: 'Hispanic Adults',
            data: [72, 71, 70, 56, 53],
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Non-Hispanic Adults',
            data: [60, 57, 49, 38, 36],
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
                    text: "Environmental Issues",
                    font: {
                        size: 18, // Change the font size of y-axis ticks
                    },
                },
                display: true,
                beginAtZero: true,
                max: 80,
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
                },
            },
            x: {
                // Add the title and modify the font size for the tick marks and the title label.
                title: {
                    display: true,
                    text: "% of people who consider this a problem",
                    font: {
                        size: 16,
                    }
                },
                display: true,
                beginAtZero: true,
                max: 80,
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
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
                text: "Hispanics see more environmental problems in their communities than non-Hispanics",
                font: {
                    size: 18, 
                },
            }
        },
        indexAxis: 'y'
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MyBarChart;
