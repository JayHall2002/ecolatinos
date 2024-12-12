"use client"
import Navbar from "../components/navbar.js";
import "./imgCarouselStyle.css"
import Video from "./Video.js";
import MyBarChart from "./MyBarChart.js";
import TotalDonationsChart from "./TotalDonationsChart.js";
import MyDoughnutChart from "./MyDoughnutChart.js";
import Image from "next/image";
import StatusGrid from "./StatusGrid.js";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";
// Body font style.
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});
// Header font size.
const poppins = Poppins({
  weight: "900",
  subsets: ['latin'],
});

export default function Impact() {
    return (
        <>
            {/* Render the navigation bar at the top of the page */}
            <Navbar />
            
            {/* Render the video on landscaping onto the page. */}
            <Video />

            <SubHeader1 />
            {/* Render the first paragraph of the introduction */}
            <Paragraph1 />

            <Other />

            <Paragraph2 />

            {/* Render Statistical information on the Organization's work. */}
            <SubHeader2 />

            <MyBarChart />
            {/* Render the footer at the bottom of the page */}

            <TotalDonationsChart />
            <GridHeading />
            <StatusGrid />
            <MyDoughnutChart />
        </>
    );
};

function SubHeader1() {
  return (
    <h1 className={`text-4xl eco-greentext ${poppins.className}`}>
      Overview
    </h1>
  );
}


// Introduction paragraphs for the Impact page.
/**
 * Function to render the first paragraph of the introduction on the Impact page.
 * @return {JSX.Element} The paragraph element.
 */
function Paragraph1() {
  return (
    <p style={{color:"black", margin: '10px'}} className={`text-1.7xl tracking-widest leading-loose text-black ${lato.className}`}>
      {/* Text content for the first paragraph of the introduction */}
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. In addition to 
      that, they have also expanded their audience base using many of the programs they paticipated in. 
    </p>
  );
}


function SubHeader2() {
  return (
    <h1 className={`text-4xl eco-greentext ${poppins.className}`}>
      Statistics on Impact
    </h1>
  );
}


/**
 * Function to render the second paragraph of the introduction on the Impact page.
 * 
 * This function renders a paragraph element that contains text describing the organization's 
 * attendance at the Tenacious Turtle Ceremony. The text is styled with black color and a margin of 10px.
 * 
 * @return {JSX.Element} The paragraph element.
 */
function Other() {
  return (
    <p style={{color:"black", margin: '10px'}} className={`text-1.7xl tracking-widest leading-loose text-black ${lato.className}`}>
      The organization has made more efforts in reducing global warning than any county 
      or state department. It has also had more success in reaching out to Latino landscapers, which 
      has been subsequently overlooked by other organizations. The organization has taken part in the 
      Youth Environmental Summer Camp program which has helped students from schools in the Price George's county
      area gain knowledge in areas like fishing, ecosystem preservation and many other areas. 
    </p>
  )
}

function Paragraph2() {
  return (
    <p style={{color:"black", margin: '10px'}} className={`text-1.7xl tracking-widest leading-loose text-black ${lato.className}`}>
      EcoLatinos has done culturally sensitive work with Spanish-speaking residents of the Chesapeake Bay region and 
      has built a bridge that unites Hispanics and other environmentalists. The organization has encouraged members to enjoy 
      nature while keeping waterways free of trash. 
    </p>
  );
}



function ImpactStatement2() {
  return (
    <p>
      <span style={{color: "rgb(0,139,139)", fontSize: "2rem", margin: "20px"}} textalign="center">
        "EcoLatinos has contributed more than any other organization towards cleanliness of the Chesapeake Bay and has 
        made efforts in improving water quality in all water bodies in the Mid Atlantic."
      </span>
    </p>
  )
}

function GridHeading() {
  return (
    <div className="container4" style={{margin: '22.5px'}}>
      <p>
        <span className={`text-4xl eco-greentext ${poppins.className}`}> 
          EcoLatinos by the numbers
        </span>
      </p>
    </div>
  );
}
