import Navbar from "../components/navbar.js";
import wheatonhigh from "../../app/images/wheaton_high_panel.jpg"
import Image from "next/image.js";

const work = [
  'On May 2nd, we attended the Tenacious Turtle Ceremony to celebrate our partnership with the International High School at Largo for the Youth Environmental After School Program.',
  'EcoLatinos participated in an Earth Day event on April 22, 2024',
  'On May 8th, EcoLatinos spread word about the Free Environmental summer camp.'
]

function List() {
  const listItems = work.map(task => 
    <li style={{fontFamily: "Arial", color:"black", margin: '10px'}}>{task}</li>
  );
  return <ul>{listItems}</ul>
}

export default function Impact () {
    return(
        <>
          <Navbar />
          <Header />
          <Paragraph1 />

          <SubHeader1 />
          <Image1 />
          <Paragraph2 />

          <SubHeader2 />
          <List />
          <Footer />
        </>
    );
};

function Paragraph1() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. They have also 
      expanded their audience base using many of the programs they paticipated in. 
    </p>
  );
}

function SubHeader1() {
  return (
    <h1 style={{color: "black", backgroundColor:"lightblue", 
      fontFamily: "Arial", margin: "10px", padding: "10px"}}> 2024 Youth Environmental Summer camp program 
    </h1>
  )
}

// Rendering the image is failing.
function Image1() {
  return (
    <Image src={wheatonhigh} alt="Wheaton High School Work" width={350} height={350}/>
  );
}

function Paragraph2() {
  return (
    <p style={{fontFamily: "Arial", color:"black", margin: '10px'}}>
      The 2024 Youth Environmental Summer camp program occured from July 8th to July 19th, 2024 for the 
      high-school students from Price George's and Montgomery counties in Maryland. In this program students learned, 
      explored, enjoyed and became inspired to protect the environment.
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
    color: "white",
    backgroundColor: "Green",
    padding: "10px",
    fontFamily: "Sans-Serif"
  }

  return (
    <footer>
      <p style={footerStyle}>Join us in making a difference!</p>
    </footer>
  );
}