"use client"
import Navbar from "../components/navbar.js";
import Carousel from "./Carousel.js"
import data from "./data.js"
import "./imgCarouselStyle.css"
import Video from "./Video.js";
import MyBarChart from "./MyBarChart.js";

import Statistic from "../images/statistic.png"
import Image from "next/image";

export default function Impact() {
    return (
        <>
            {/* Render the navigation bar at the top of the page */}
            <Navbar />

            {/* Render the video on landscaping onto the page. */}
            <Video />

            {/* Render the first paragraph of the introduction */}
            <Paragraph1 />

            {/* Render the second introductory paragraph. */}
            <Paragraph2 />

            {/* Render the first subheader on the page */}
            <SubHeader1 />

            {/* Render the image carousel; note: this carousel has an issue */}
            <ImageCarousel />

            {/* Add a margin for spacing between sections */}
            <div style={{ margin: '85px' }}></div>

            {/* Render Statistical information on the Organization's work. */}
            <SubHeader2 />
            <Image src={Statistic} alt="stat_img" width={400} height={400} style={{alignItems: "center"}}/>
            <ImpactStatement />

            <ImpactStatement3 />
            <MyBarChart />
            
        </>
    );
};

// Introduction paragraphs for the Impact page.
/**
 * Function to render the first paragraph of the introduction on the Impact page.
 * @return {JSX.Element} The paragraph element.
 */
function Paragraph1() {
  return (
    <p style={{color:"black", margin: '10px'}} className='font-mono font-semibold  mt-5'>
      {/* Text content for the first paragraph of the introduction */}
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. In addition to 
      that, they have also expanded their audience base using many of the programs they paticipated in. The organization 
      has made more efforts in reducing global warning than any county or state department. It has also had more 
      success in reaching out to Latino landscapers, which has been subsequently overlooked by other organizations.
    </p>
  );
}


/**
 * Function that renders the second introduction paragraph on the Impact page.
 * @returns {JSX.Element}
 */
function Paragraph2() {
  return (
    <p style={{color:"black", margin: '10px'}} className="font-mono font-semibold  mt-5">
      EcoLatinos has done culturally sensitive work with Spanish-speaking residents of the Chesapeake Bay region and 
      has built a bridge that unites Hispanics and other environmentalists. The organization has encouraged members to enjoy 
      nature while keeping waterways free of trash. 
    </p>
  );
}

/**
 * Function to render the first subheader on the Impact page.
 * 
 * This function renders an h1 element with a lightblue background color and black text color. 
 * The subheader is styled with a margin of 10px and a padding of 10px. 
 * The text content of the subheader is "EcoLatinos' Impact on Environment".
 * 
 * @return {JSX.Element} The subheader element.
 */
function SubHeader1() {
  return (
    <h1 className='font-mono text-4xl text-blue-500 relative font-semibold' style={{margin: "10px"}}>
      {/* Text content for the first subheader */}
      EcoLatinos' Impact on Environment 
    </h1>
  )
}

function SubHeader2() {
  return (
    <h1 className='font-mono text-4xl text-blue-500 relative font-semibold' style={{margin: "10px", textAlign: "center"}}>
      Statistics on Impact
    </h1>
  );
}

// This carousel is failing somehow.
function ImageCarousel() {
  return (
   <Carousel data={data} /> 
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
    <p style={{color:"black", margin: '10px'}} className="font-mono font-semibold  mt-5">
      The organization has made more efforts in reducing global warning than any county 
      or state department. It has also had more success in reaching out to Latino landscapers, which 
      has been subsequently overlooked by other organizations. 
    </p>
  )
}



function ImpactStatement() {
  return (
    <p>
      <span style={{color: "rgb(0,139,139)", fontSize: "2rem", textalign:"right", margin: "20px"}}>
        Latinos have never been contacted by an organization working to 
        reduce global warming.
      </span>
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

function ImpactStatement3() {
  return (
    <p>
      <span className='font-mono text-4xl text-blue-500 relative font-semibold' style={{margin: "10px", textAlign: "center"}}>
          Latinos are more concerned about global warming than non-Latinos.
      </span>
    </p>
  )
}

