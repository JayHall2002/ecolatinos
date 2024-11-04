import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
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
    const data = {
        labels: labels,
        datasets: datasets,
    };
    const options = {
        scales: {
        y: {
            title: {
            display: true,
            text: "% of people who consider this a problem",
            },
            display: true,
            beginAtZero: true,
            max: 100,
        },
        x: {
            title: {
            display: true,
            text: "Environmental Issues",
            },
            display: true,
            beginAtZero: true,
            max: 100,
        },
        },
    };
    return (
        <div style={{ width: "1000px", alignItems:"center" }}>
            <h1>Hispanics see more environmental problems in their communities than non-Hispanics</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MyBarChart;