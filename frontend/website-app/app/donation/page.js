"use client";

import Navbar from "../components/navbar";
import "./page.css";
import React from 'react';
import Image from "next/image";
import Trees from "../../app/images/pexels-felixmittermeier-957024.jpg";
import StyledButton from './button';

const handleClick = () => alert('Button clicked!');

export default function Donations() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center" id="header">Donations</h1>
      <Image src={Trees} alt="Trees picture" id="treesImage" />
      <div style={{ padding: "0 20px" }}>
        <p>EcoLatinos is a 501(c)(3) nonprofit and is committed to environmental justice through engaging, educating, and activating Latino communities. Your support is vital to our success.</p>
        <p>Donate safely and securely via Paypal, credit, or debit card.</p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <StyledButton onClick={handleClick}>Donate</StyledButton>
        </div>
        <p><b>If you prefer to respond by mail, send your donation to:</b></p>
        <address>
          ecoLatinos, Inc<br />
          7309 Baltimore Ave, Suite 218<br />
          College Park, MD 20740<br />
          (240) 562-1254<br />
          <a href="mailto:info@ecolatinos.org">info@ecolatinos.org</a>
        </address>
      </div>
    </div>
  );
}

