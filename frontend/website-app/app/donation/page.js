//page.js

"use client";

// Import the Navbar component from the components folder.
import Navbar from "../components/navbar";

// Import the CSS styles for this page.
import "./page.css"

// Import React and the Image component from Next.js.
import React from 'react';
import Image from "next/image";

// Import the image of the trees from the images folder.
import Trees from "../../app/images/pexels-felixmittermeier-957024.jpg"

// Import the StyledButton component from the button module.
import StyledButton from './button';

// Define a function to handle the button click event.
const handleClick = () => {
  // Alert the user when the button is clicked.
  alert('Button clicked!');
};

// Define the Donations component.
export default function Donations() {
  return (
    <div>
      {/* Render the Navbar component. */}
      <Navbar />
      {/* Render a heading with the text "Donations". */}
      <h1 className="text-center" id="header">Donations</h1>
      {/* Render the image of the trees. */}
      <Image src={Trees} alt="Trees picture" id="treesImage" />
      {/*Render a paragraph explaining the purpose of EcoLatinos. */}
      <h1>&nbsp;EcoLatinos is a 501(c)(3) nonprofit and is committed to environmental justice through engaging, educating, and activating Latino &nbsp;communities. Your support is vital to our success.
      </h1>
      {/*Render a paragraph explaining the donation process. */}
      <h1 id="">&nbsp;Donate safely and securely via Paypal, credit, or debit card.</h1>
      {/* Render a div containing the donation button. */}
      <div>
        {/* When the button is clicked, call the handleClick function. */}
        <div>
          <StyledButton style="position: absolute; left: 50%; transform: translateX(-50%);" onClick={handleClick}>Donate</StyledButton>
        </div>
        {/* Render a line break. */}
        <br></br>
      </div>
      {/* Render a paragraph with the mailing address and contact information. */}
      <h1>&nbsp;<b>If you prefer to respond by mail, send your donation to:</b>
        <br></br>
        &nbsp;ecoLatinos, Inc
        <br></br>
        &nbsp;7309 Baltimore Ave, Suite 218
        <br></br>
        &nbsp;College Park, MD 20740
        <br></br>
        &nbsp;(240) 562-1254
        <br></br>
        &nbsp;info@ecolatinos.org
      </h1>
    </div>
  );
};
