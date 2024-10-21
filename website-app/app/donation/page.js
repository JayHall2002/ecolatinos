//page.js

"use client";

import Navbar from "../components/navbar";
import "./page.css"
import React from 'react';
import Image from "next/image";
import Trees from "../../app/images/pexels-felixmittermeier-957024.jpg"
import StyledButton from './button';

const handleClick = () => {
  alert('Button clicked!');
};

export default function Donations() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center" id="header">Donations</h1>
      <Image src={Trees} alt="Trees picture" id="treesImage" />
      <h1>&nbsp;EcoLatinos is a 501(c)(3) nonprofit and is committed to environmental justice through engaging, educating, and activating Latino &nbsp;communities. Your support is vital to our success.
      </h1>
      <h1 id="">&nbsp;Donate safely and securely via Paypal, credit, or debit card.</h1>
      <div>
        <div>
          <StyledButton style="position: absolute; left: 50%; transform: translateX(-50%);" onClick={handleClick}>Donate</StyledButton>
        </div>
        <br></br>
      </div>
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