import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

// This Bar chart renders data from a Pew Research Survey that shows that Latinos are more concerned 
// about the environment than any other population.
const MyBarChart = () => {
    // The issues that Latinos care about the most.
<<<<<<< HEAD
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
=======
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
>>>>>>> upstream/dev
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
<<<<<<< HEAD
                    text: "Percentage of people concerned",
                    font: {
                        size: 18, // Change the font size of y-axis ticks
                    },
                    color: "black",
                },
                display: true,
                beginAtZero: true,
                max: 100,
=======
                    text: "Environmental Issues",
                    font: {
                        size: 18, // Change the font size of y-axis ticks
                    },
                },
                display: true,
                beginAtZero: true,
                max: 80,
>>>>>>> upstream/dev
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
<<<<<<< HEAD
                    color: "black",
=======
>>>>>>> upstream/dev
                },
            },
            x: {
                // Add the title and modify the font size for the tick marks and the title label.
                title: {
                    display: true,
<<<<<<< HEAD
                    text: "People Category",
                    font: {
                        size: 16,
                    },
                    color: "black",
                },
                display: true,
                beginAtZero: true,
=======
                    text: "% of people who consider this a problem",
                    font: {
                        size: 16,
                    }
                },
                display: true,
                beginAtZero: true,
                max: 80,
>>>>>>> upstream/dev
                ticks: {
                    font: {
                      size: 16, // Change the font size of y-axis ticks
                    },
<<<<<<< HEAD
                    color: "black",
                },
            },
        },
        maintainAspectRatio: false,
        plugins: {
            // This line of code sets the options for legend and title of graph.
=======
                },
            },
        },
        plugins: {
>>>>>>> upstream/dev
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
<<<<<<< HEAD
                text: "Global Warming is more important to Latinos than any other minority.",
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
        
    };
    // Display the Bar chart to screen.
    return (
        <div style={{display: 'flex', width: '1200px', height: '800px', margin: "360px", marginBottom: "6.5px"}}>
=======
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
>>>>>>> upstream/dev
            <Bar data={data} options={options} />
        </div>
    );
};

export default MyBarChart;
