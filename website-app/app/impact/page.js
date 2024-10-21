import Navbar from "../components/navbar.js";
import Carousel from "./Carousel.js"
import data from "./data.js"
import "./imgCarouselStyle.css"


export default function Impact () {
    return(
        <>
          <Navbar />
          <Header />
          <Paragraph1 />
          <IntroductionAdd />
          <SubHeader1 />
          <ImageCarousel />
          <div style={{ margin: '85px' }}></div>
          <SubHeader2 />
          <Paragraph2 />
          <Footer />
        </>
    );
};

// Introduction paragraphs for the Impact page.
function Paragraph1() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. They have also 
      expanded their audience base using many of the programs they paticipated in. Their efforts in stormwater mitigation 
      systems have been concerned in the communities - Aspen Hill and Wheaton. 
    </p>
  );
}

function IntroductionAdd() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin:'10px'}}>
      EcoLatinos has also provided bilingual outreach to the Year of the Anacostia project. This yearlong celebration 
      honored the history of the Anacostia river, its communities and the progress toward its restoration. 
    </p>
  )
}

function SubHeader1() {
  return (
    <h1 style={{color: "black", backgroundColor:"lightblue", 
      fontFamily: "Arial", margin: "10px", padding: "10px"}}> EcoLatinos' Impact on Environment 
    </h1>
  )
}

// This carousel is failing somehow.
function ImageCarousel() {
  return (
   <Carousel data={data} /> 
  );
}

function Paragraph2() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      The Organization attended the Tenacious Turtle Ceremony to celebrate their partnership with the 
      International High School at Largo for the Youth Environmental After School Program.
    </p>
  )
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