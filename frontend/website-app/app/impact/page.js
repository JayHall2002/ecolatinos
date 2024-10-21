import Navbar from "../components/navbar.js";
import Carousel from "./Carousel.js"
import data from "./data.js"
import "./imgCarouselStyle.css"


export default function Impact() {
    return (
        <>
            {/* Render the navigation bar at the top of the page */}
            <Navbar />
            
            {/* Render the main header for the Impact page with specific styles */}
            <Header />

            {/* Render the first paragraph of the introduction */}
            <Paragraph1 />

            {/* Render additional introduction content */}
            <IntroductionAdd />

            {/* Render the first subheader on the page */}
            <SubHeader1 />

            {/* Render the image carousel; note: this carousel has an issue */}
            <ImageCarousel />

            {/* Add a margin for spacing between sections */}
            <div style={{ margin: '85px' }}></div>

            {/* Render the second subheader on the page */}
            <SubHeader2 />

            {/* Render the second paragraph of the introduction */}
            <Paragraph2 />

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
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      {/* Text content for the first paragraph of the introduction */}
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. They have also 
      expanded their audience base using many of the programs they paticipated in. Their efforts in stormwater mitigation 
      systems have been concerned in the communities - Aspen Hill and Wheaton. 
    </p>
  );
}

/**
 * Function to render additional introduction content after the first paragraph on the Impact page.
 * 
 * This function renders a paragraph element that contains text describing the organization's bilingual outreach 
 * to the Year of the Anacostia project. The text is styled with black color and a margin of 10px.
 * 
 * @return {JSX.Element} The paragraph element.
 */
function IntroductionAdd() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin:'10px'}}>
      {/* Text content for the additional introduction paragraph */}
      {/* 
        This text explains that EcoLatinos has provided bilingual outreach to the Year of the Anacostia project. 
        This yearlong celebration honored the history of the Anacostia river, its communities and the progress toward its restoration. 
      */}
      EcoLatinos has also provided bilingual outreach to the Year of the Anacostia project. This yearlong celebration 
      honored the history of the Anacostia river, its communities and the progress toward its restoration. 
    </p>
  )
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
      fontFamily: "Arial", margin: "10px", padding: "10px"}}>
      {/* Text content for the first subheader */}
      EcoLatinos' Impact on Environment 
    </h1>
  )
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
function Paragraph2() {
  // Return the paragraph element.
  return (
    // Render the paragraph element with the specified styles.
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      {/* 
        Text content for the second paragraph of the introduction.
        This text explains that EcoLatinos attended the Tenacious Turtle Ceremony 
        to celebrate their partnership with the International High School at Largo 
        for the Youth Environmental After School Program. 
      */}
      The Organization attended the Tenacious Turtle Ceremony to celebrate their partnership with the 
      International High School at Largo for the Youth Environmental After School Program.
    </p>
  );
}

function SubHeader2() {
  return (
    <h1 style={{color: "black", backgroundColor:"lightblue", 
      fontFamily: "Arial", margin: "10px", padding: "10px"}}> Tenacious Turtle Ceremony 
    </h1>
  )
}


function Header() {
  // Make the header have some styles.
  const myStyle = { color: "white", backgroundColor: "Green",
    padding: "10px", fontFamily: "Sans-Serif",
    textalign: "center"
  };

  return (
    <header>
      <h1 style={myStyle}>Our Impact</h1>
      <p>See how we're making a difference.</p>
    </header>
  );
}

function Footer() {
  // Make the footer have certain styles. 
  const footerStyle = {
    color: "white", backgroundColor: "Green",
    padding: "10px", fontFamily: "Sans-Serif"
  }

  return (
    <footer>
      <p style={footerStyle}>Join us in making a difference!</p>
    </footer>
  );
}