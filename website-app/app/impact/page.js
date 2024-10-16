import { useState } from "react";
import Navbar from "../components/navbar.js";

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
      EcoLatinos has helped plant 54 trees in and around Saint Mary's of Landover's church, school 
      and parking lot.
    </p>
  )
}

function Header() {
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