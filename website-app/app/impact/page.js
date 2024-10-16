import Navbar from "../components/navbar.js";
import ecolatinos_work from '../../ecolatinos_work.jpg'

export default function Impact () {
    return(
        <>
          <Navbar />
          <Header />
          <Paragraph1 />
          <Footer />
        </>
    );
};

function Paragraph1() {
  return (
    <p>
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. They have also 
      expanded their audience base. 
    </p>

   
  )
}

function Header() {
  // Make the header have some styles.
  const myStyle = {
    color: "white",
    backgroundColor: "Green",
    padding: "10px",
    fontFamily: "Sans-Serif",
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