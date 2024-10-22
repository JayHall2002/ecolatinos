"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import ourmission from "../app/images/landscaping.jpeg";
import landScapeImage from "../app/images/landscaping.jpeg";
import Navbar from "../app/components/navbar";
import Donationbutton from "./components/donate";
import Learnmorebutton from "./components/learnmore";
import Link from "next/link";
import scapingprogram from "../app/images/scapingprogram.jpeg";
import youthprogram from "../app/images/youthprogram.jpeg";
import placeprogram from "../app/images/outreachprogram.jpeg";
import partnershipprogram from "../app/images/partnershipprogram.jpeg";
import getinvolved from "../app/images/joinus.jpeg";


export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [isHoveringMission, setIsHoveringMission] = useState(false);
    const [isHoveringPrograms, setIsHoveringPrograms] = useState(false);
    const [isHoveringLearnMore, setIsHoveringLearnMore] = useState(false);
    const [isShowingLandScapeImage, setIsShowingLandScapeImage] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const typeText = () => {
        const description = "Amplify the voice of the Latino Communities in their pursuit of social and environmental justice through outreach, education and advocacy across the Chesapeake Bay region.";
        const typingSpeed = 1000 / 60;
        let index = 0;
        setTypedText("");

        const type = () => {
            if (index <= description.length) {
                setTypedText(description.slice(0, index));
                index++;
                if (index <= description.length) {
                    setTimeout(type, typingSpeed);
                }
            }
        };

        type();
    };

    const programButtons = ["Equitable Landscaping Training Program", "Youth Environmental Programs", "Place-Based Outreach and Restoration Programs", "Partnership Programs"," Get Involved / Join Us(Calendar)"];

    return (
        <>
            <div className={isMounted ? "fade-in" : ""} style={{ padding: "20px" }}>
                <Donationbutton style={{ marginBottom: "20px" , }} />
                <Navbar />
                
                {isMounted && (
                    <div className="fade-in flex justify-start space-x-16 italic" style={{ marginTop: "20px", opacity: 0, animation: "fadeIn 9s ease-in forwards", animationDelay: "3s" }}>
                        <h1 className="text-4xl font-mono font-semibold text-gray-600">Our Mission</h1>  
                    </div>
                        
                )}
                {isMounted && (
                    <div className="fade-in flex flex-row justify-start space-x-16" style={{ marginTop: "20px", opacity: 0, animation: "fadeIn 9s ease-in forwards", animationDelay: "6s" }}>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-mono font-semibold tracking-widest leading-loose text-green-600 text-left">Amplify the voice of the Latino Communities in their pursuit of social and environmental justice through outreach, education and advocacy across the Chesapeake Bay region.</h2>
                            <Link href="/aboutus" passHref>  
                                <div className="flex justify-center" style={{ marginTop: "20px" }}>
                                    <Learnmorebutton />
                                </div>
                            </Link>
                        </div>
                        <Image src={ourmission} alt="our mission" height={300} width={600} className="text-blue-500 font-mono rounded-full shadow-lg border-2" style={{ marginBottom: "20px" }} />
                    </div>
                )}
                {isMounted && (
                    <div className="fade-in" style={{ marginTop: "40px", opacity: 0, animation: "fadeIn 9s ease-in forwards", animationDelay: "9s" }}>
                        <div className="fade-in flex flex-row justify-start space-x-16 italic">
                            <h1 className="text-4xl font-mono font-semibold text-gray-600">Our Programs</h1> 
                        </div>
                        <div className="flex justify-start space-x-16 image-container" style={{ marginTop: "20px" , marginBottom: "100px"}}>
                            <div className="flex flex-col items-center group relative">
                                <Image src={scapingprogram} alt="Land Scaping Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Land Scaping Program</p>
                                <Link href="/landscaping" passHref>
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-green-700">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center group relative">
                                <Image src={youthprogram} alt="Youth Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Youth Program</p>
                                <Link href="/landscaping" passHref>
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-green-700">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center group relative">
                                <Image src={placeprogram} alt="Outreach Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Outreach Program</p>
                                <Link href="/landscaping" passHref>
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-green-700">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center group relative">
                                <Image src={partnershipprogram} alt="Partnership Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Partnership Program</p>
                                <Link href="/landscaping" passHref>
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-green-700">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center group relative">
                                <Image src={getinvolved} alt="Join Us" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Join Us</p>
                                <Link href="/landscaping" passHref>
                                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-green-700">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                        
                )}
                {/* Subscription Text Entry Box */}
                <div className="flex flex-col items-center" style={{ marginTop: "40px",marginBottom: "100px", animation: "fadeIn 9s ease-in forwards", animationDelay: "9s" }}>
                    <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
                </div>
                {/* Footer */}

                <footer style={{
                    position: "fixed", 
                    left: 0, 
                    bottom: 0, 
                    width: "100%", 
                    backgroundColor: "#3ea23e", 
                    color: "white", 
                    textAlign: "center", 
                    padding: "20px" 
                }}>
                    <p>© 2024 EcoLatinos - All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}


