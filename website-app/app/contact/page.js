"use client";
import { useState } from "react";

import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import victor from "../../app/images/vrpfp.jpeg";
import emily from "../../app/images/efpfp.jpeg";
import ruby from "../../app/images/rspfp.jpeg";
import sandi from "../../app/images/sjpfp.jpeg";

export default function Contact() {
    const [hoveredProfile, setHoveredProfile] = useState(null); // State for tracking hovered profile

    return (
        <div>
            <Navbar />
            {/* Profile Pictures of Leaders */}
            {/* Victor */}
            <div className="flex justify-center space-x-8">
                <div className="w-1/2 flex justify-center">
                    <div className="flex flex-col items-center">
                        <Image
                            src={victor}
                            alt="Victor Profile Picture"
                            className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700"
                            onMouseEnter={() => setHoveredProfile("Victor")} // Set hovered profile to Victor
                            onMouseLeave={() => setHoveredProfile(null)} // Reset hovered profile
                        />
                        <div className="text-center mt-2">
                            <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Victor</p>
                            <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Chairmen of the Board</p>
                        </div>
                    </div>
                </div>
                {/* Emily */}
                <div className="w-1/2 flex justify-start translate-x-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src={emily}
                            alt="Emily Profile Picture"
                            className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700"
                            onMouseEnter={() => setHoveredProfile("Emily")} // Set hovered profile to Emily
                            onMouseLeave={() => setHoveredProfile(null)} // Reset hovered profile
                        />
                        <div className="text-center mt-2">
                            <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Emily</p>
                            <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Secretary</p>
                        </div>
                    </div>
                </div>
                {/* Ruby */}
                <div className="group relative w-1/2 flex justify-start">
                    <div className="flex flex-col items-center">
                        <Image
                            src={ruby}
                            alt="Ruby Profile Picture"
                            className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700"
                            onMouseEnter={() => setHoveredProfile("Ruby")} // Set hovered profile to Ruby
                            onMouseLeave={() => setHoveredProfile(null)} // Reset hovered profile
                        />
                        <div className="text-center mt-2">
                            <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Ruby</p>
                            <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Founder, CEO</p>
                        </div>
                    </div>
                </div>
                {/* Sandi */}
                <div className="w-1/2 flex justify-start">
                    <div className="flex flex-col items-center">
                        <Image
                            src={sandi}
                            alt="Sandi Profile Picture"
                            className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700"
                            onMouseEnter={() => setHoveredProfile("Sandi")} // Set hovered profile to Sandi
                            onMouseLeave={() => setHoveredProfile(null)} // Reset hovered profile
                        />
                        <div className="text-center mt-2">
                            <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Sandi</p>
                            <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Chair of the Board</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hover Text Conditional Rendering */}
            {hoveredProfile === "Ruby" && ( // Conditional rendering based on hovered profile
                <div className="flex justify-center translate-y-8 animate-pulse ">
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col items-center">
                            <p className="text-blue-600 font-semibold ">
                                Ruby R. Stemmle is the founder and CEO of EcoLatinos. 
                                Ruby started EcoLatinos following her passion for the conservation of our madre tierra and 
                                her commitment to social and environmental justice, by engaging and advocating for 
                                Spanish-speaking and diverse communities. From her over 15 years of experience in 
                                government relations, public engagement, and inclusive outreach, Ruby understands 
                                the need to build bridges with the fast-growing Hispanic community as well as other 
                                under-resourced communities and minority groups. She believes that communities of color are a 
                                great natural ally for conservation and environmental efforts and she has experience achieving engagement 
                                by employing a dynamic yet culturally sensitive approach.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {hoveredProfile === "Emily" && ( // Conditional rendering for Emily
                <div className="flex justify-center translate-y-8 animate-pulse">
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold text-green-600">
                            She currently serves as Vice President of Development and Philanthropy for Potomac Riverkeeper Network. 
                            Emily received her undergraduate degree in Political Science from California State University, 
                            Hayward, and her Masters of Environmental Science from Johns Hopkins University. 
                            In addition to ecoLatinos, Emily serves on the boards of Waterkeepers Chesapeake, and 
                            Capital Community Partners.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {hoveredProfile === "Victor" && ( // Conditional rendering for Victor
                <div className="flex justify-center translate-y-8 animate-pulse">
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold text-blue-600">
                            The principal owner of the Law Office of Victor R. Ramirez, LLC and is a 
                            seasoned trial attorney. Mr. Ramirez received his Bachelor’s Degree from Frostburg State 
                            University and his Juris Doctor’s Degree from St. Thomas University School of 
                            Law in Miami, Florida. Additionally, he served with distinction in the Maryland Senate and House of 
                            Delegates for sixteen years.
                            He is currently a Trustee on the Prince George’s Community College 
                            Board and a Board member on the Salvadoran American Chamber of Commerce.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {hoveredProfile === "Sandi" && ( // Conditional rendering for Sandi
                <div className="flex justify-center translate-y-8 animate-pulse">
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold text-green-600">
                            Sandi holds a bachelor’s degree in English from the University of Kansas, 
                            and a Master’s degree in Curriculum and Instruction from 
                            the University of Maryland, Baltimore County. Sandi’s has a deep connection to the 
                            community in which she works, which is how she came to know the people and 
                            work of ecoLatinos.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* Contact Buttons */}
            <div className="contactbuttons flex mt-8 justify-center space-x-8 translate-y-8">
                <Link href="https://www.facebook.com/ecolatinos/" target="_blank" passHref>
                    <div className="text-center">
                        <button className="items-center rounded-lg 
                        border-2 border-black-600 
                        bg-green-600 px-4 py-2 text-white
                        hover:scale-125 hover:bg-green-700">
                            Our Facebook
                        </button>
                    </div>
                </Link>
                <Link href="https://www.instagram.com/ecolatinos/" target="_blank" passHref>
                    <div>
                        <button className="rounded-lg border-2 border-black-600 
                        bg-green-600 px-4 py-2 text-white 
                        hover:scale-125 hover:bg-green-700">
                            Instagram
                        </button>
                    </div>
                </Link>
            </div>
            {/* Phone Number + Other Contact Information */}
            <div className="mt-8 translate-y-8">
                <h2 className="text-3xl font-sans font-bold text-center text-blue-600">
                    Contact Us Today
                </h2>
                <div className="flex space-x-12 justify-center 
                font-sans text-green-600 text-xl font-bold translate-y-12">
                    <h3 className="hover:scale-125 hover:text-green-900">240.832.6090</h3>
                    <h3 className="hover:scale-125 hover:text-green-900">info@ecolatinos.org</h3>
                </div>
            </div>
        </div>
    );
}
