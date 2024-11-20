"use client"
import Navbar from "../components/navbar.js";
import "./imgCarouselStyle.css"
import Video from "./Video.js";
import MyBarChart from "./MyBarChart.js";
<<<<<<< HEAD
import TotalDonationsChart from "./TotalDonationsChart.js";
import MyDoughnutChart from "./MyDoughnutChart.js";
import Image from "next/image";
import StatusGrid from "./StatusGrid.js";
=======

import Statistic from "../images/statistic.png"
import Image from "next/image";

>>>>>>> upstream/dev
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

            <MyBarChart />
            <ImpactStatement3 />

<<<<<<< HEAD
            {/* The next function renders a Pie chart that shows how much every grant contributed to 
                the organization's funding. */}
            <TotalDonationsChart />
            <GridHeading />
            {/* Create a Grid that shows the statistics related to the organization. */}
            <StatusGrid />
            <MyDoughnutChart />
            
            
=======
            {/* Add a margin for spacing between sections */}
            <div style={{ margin: '85px' }}></div>
            <Other />

            <Paragraph2 />

            {/* Render Statistical information on the Organization's work. */}
            <SubHeader2 />
            <Image src={Statistic} alt="stat_img" width={400} height={400} />
            <ImpactStatement />


            <MyBarChart />
            {/* Render the footer at the bottom of the page */}
            <Footer />
>>>>>>> upstream/dev
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
<<<<<<< HEAD
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
=======
      that, they have also expanded their audience base using many of the programs they paticipated in. 
>>>>>>> upstream/dev
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

<<<<<<< HEAD
=======
function SubHeader2() {
  return (
    <h1 className='font-mono text-4xl text-blue-500 relative font-semibold'>
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

>>>>>>> upstream/dev
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
<<<<<<< HEAD
      has been subsequently overlooked by other organizations. 
    </p>
  )
}
// This function returns 
function ImpactStatement2() {
=======
      has been subsequently overlooked by other organizations. The organization has taken part in the 
      Youth Environmental Summer Camp program which has helped students from schools in the Price George's county
      area gain knowledge in areas like fishing, ecosystem preservation and many other areas. 
    </p>
  )
}

function Paragraph2() {
  return (
    <p style={{color:"black", margin: '10px'}} className="font-mono font-semibold  mt-5">
      EcoLatinos has done culturally sensitive work with Spanish-speaking residents of the Chesapeake Bay region and 
      has built a bridge that unites Hispanics and other environmentalists. The organization has encouraged members to enjoy 
      nature while keeping waterways free of trash. 
    </p>
  );
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

function Header() {
  // Make the header have some styles.
  const myStyle = { color: "white", backgroundColor: "Green",
    padding: "10px", textalign: "center", margin:"10px", className:'main-header'
  };

>>>>>>> upstream/dev
  return (
    <p>
      <span style={{color: "rgb(0,139,139)", fontSize: "2rem", margin: "20px"}} textalign="center">
        "EcoLatinos has contributed more than any other organization towards cleanliness of the Chesapeake Bay and has 
        made efforts in improving water quality in all water bodies in the Mid Atlantic."
      </span>
    </p>
  );
}

function ImpactStatement3() {
  return (
    <div className="container4">
      <p>
        <span className='font-mono text-4xl text-blue-500 relative font-semibold' style={{margin: "10px", textAlign: "center", paddingBottom: "0.5rem"}}>
            Latinos are more concerned about global warming than non-Latinos.
        </span>
      </p>
    </div>
  );
}
function GridHeading() {
  return (
    <div className="container4" style={{margin: '22.5px'}}>
      <p>
        <span className="font-mono text-4xl text-black-500 relative font-semibold"> 
          EcoLatinos by the numbers
        </span>
      </p>
    </div>
  );
}
