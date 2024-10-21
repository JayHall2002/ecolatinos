"use client"; // This directive indicates that this component should be rendered on the client-side.

// Importing necessary modules and components
import Navbar from "../components/navbar"; // Importing the Navbar component for navigation
import "./page.css"; // Importing CSS styles for this page
import React from 'react'; // Importing React library
import Image from "next/image"; // Importing Image component from Next.js for optimized image rendering
import Trees from "../../app/images/pexels-felixmittermeier-957024.jpg"; // Importing an image to be used in the component
import StyledButton from './button'; // Importing a styled button component

// Function to handle click events on the button
const handleClick = () => alert('Button clicked!'); // Displays an alert when the button is clicked

// Main function component for the Donations page
export default function Donations() {
  return (
    <div> {/* Main container for the content */}
      <Navbar /> {/* Rendering the Navbar component at the top */}
      <h1 className="text-center" id="header">Donations</h1> {/* Page title with centered text */}
      <Image src={Trees} alt="Trees picture" id="treesImage" /> {/* Displaying an image with an alt text */}
      <div style={{ padding: "0 20px" }}> {/* Container with padding for the main content */}
        <p>EcoLatinos is a 501(c)(3) nonprofit and is committed to environmental justice through engaging, educating, and activating Latino communities. Your support is vital to our success.</p> {/* Description of the organization */}
        <p>Donate safely and securely via Paypal, credit, or debit card.</p> {/* Information on how to donate */}
        <div style={{ textAlign: "center", margin: "20px 0" }}> {/* Centered container for the donation button */}
          <StyledButton onClick={handleClick}>Donate</StyledButton> {/* Styled button with an onClick event */}
        </div>
        <p><b>If you prefer to respond by mail, send your donation to:</b></p> {/* Information for mailing donations */}
        <address> {/* Address block for mailing donations */}
          ecoLatinos, Inc<br />
          7309 Baltimore Ave, Suite 218<br />
          College Park, MD 20740<br />
          (240) 562-1254<br />
          <a href="mailto:info@ecolatinos.org">info@ecolatinos.org</a> {/* Mailto link for sending emails */}
        </address>
      </div>
      
    </div>
  );
}

