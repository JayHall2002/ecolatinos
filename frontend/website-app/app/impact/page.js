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
            
            {/* Render the main header for the Impact page with specific styles */}
            <Header />

            {/* Render the video on landscaping onto the page. */}
            <Video />

            {/* Render the first paragraph of the introduction */}
            <Paragraph1 />

            {/* Render the first subheader on the page */}
            <SubHeader1 />

            {/* Render the image carousel; note: this carousel has an issue */}
            <ImageCarousel />

            {/* Add a margin for spacing between sections */}
            <div style={{ margin: '85px' }}></div>
            <Other />

            <Paragraph2 />
            <Paragraph3 />

            {/* Render Statistical information on the Organization's work. */}
            <SubHeader2 />
            <Image src={Statistic} alt="stat_img" width={400} height={400} />
            <ImpactStatement />

            <ImpactStatement2 />

            {/* Render the footer at the bottom of the page */}
            <Footer />
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
      that, they have also expanded their audience base using many of the programs they paticipated in. 
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
    <h1 style={{color: "black", backgroundColor:"lightblue", 
      margin: "10px", padding: "10px"}} className='sub-heading'>
      {/* Text content for the first subheader */}
      EcoLatinos' Impact on Environment 
    </h1>
  )
}

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

function Paragraph2() {
  return (
    <p style={{color:"black", margin: '10px'}} className="font-mono font-semibold  mt-5">
      On Saturday October 5th, EcoLatinos kicked off the 2024 Equitable Sustainable Landscaping Training 
      Program with its Spanish language session at the Hyattsville library. Landscapers delved into topics like stormwater management, 
      best management practices, rain gardens, previous surfaces, and hands on activities. 
    </p>
  );
}

function Paragraph3() {
  return (
    <p style={{color:"black", margin: '10px'}} className="font-mono font-semibold  mt-5">
      EcoLatinos has partnerted with many schools in Price George's county to provide those school students knowledge on 
      environmental preservation. Through these programs, the organization has inspired people to protect and conserve 
      Mother Earth. Through the Youth Environmental Summer Camp program, the organization has also given students opportunities to 
      learn.
    </p>
  )
}

function ImpactStatement() {
  return (
    <p>
      <span style={{color: "rgb(0,139,139)", fontSize: "2rem", textAlign:"right", margin: "20px"}}>
        Latinos have never been contacted by an organization working to 
        reduce global warming.
      </span>
    </p>
  );
}

function ImpactStatement2() {
  return (
    <p>
      <span style={{color: "rgb(0,139,139)", fontSize: "2rem", margin: "20px"}} textAlign={"center"}>
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

  return (
    <header>
      <h1 style={myStyle}>Our Impact</h1>
    </header>
  );
}

function Footer() {
  // Make the footer have certain styles. 
  const footerStyle = {
    color: "white", backgroundColor: "Green",
    padding: "10px"
  };

  return (
    <footer>
      <p style={footerStyle}>Join us in making a difference!</p>
    </footer>
  );
}