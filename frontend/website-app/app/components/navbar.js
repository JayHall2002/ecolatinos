"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../app/globals.css";
import "../styles.css";
import logo from "../images/ecolatinoslogo.png";
import { Poppins } from "next/font/google";

// Import Poppins Black font
const poppins = Poppins({
  weight: "900", // Black font weight
  subsets: ["latin"], // Ensure proper subset
});

export default function Navbar() {
  return (
    <nav className={`bg-white-800 text-blue py-4 slide-up ${poppins.className}`}>
      <div className="container mx-auto flex justify-between items-center -translate-x-12">
        <Link href="/" passHref>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="logo"
              height={200}
              width={200}
              className="text-blue-500 font-mono"
              style={{ marginBottom: "20px" }}
            />
          </div>
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-blue-700">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/aboutus" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-green-600">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/donation" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-blue-600">
                Support Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-green-600">
                Contact Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/impact" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-blue-600">
                Our Impact
              </span>
            </Link>
          </li>
          <li>
            <Link href="/impact" locale="es" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-blue-600">
                ES Version
              </span>
            </Link>
          </li>
          <li>
            <Link href="/impact" locale="en" passHref>
              <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700 hover:text-blue-600">
                EN Version
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
