"use client";
import "./styles.css";
import "./globals.css";
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
import { Poppins } from "next/font/google";
import { Lato } from "next/font/google";

// Import Poppins Black font
const poppins = Poppins({
    weight: "900", // Black font weight
    subsets: ["latin"], // Ensure proper subset
})

// Import Lato font
const lato = Lato({
    weight: "400", // Regular weight (change to "700" or "900" for bold)
    subsets: ["latin"], // Use appropriate subsets
  });
export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [isHoveringMission, setIsHoveringMission] = useState(false);
    const [isHoveringPrograms, setIsHoveringPrograms] = useState(false);
    const [isHoveringLearnMore, setIsHoveringLearnMore] = useState(false);
    const [isShowingLandScapeImage, setIsShowingLandScapeImage] = useState(false);
    const [isShowingYouthProgram, setIsShowingYouthProgram] = useState(false);
    const [isShowingOutreachProgram, setIsShowingOutreachProgram] = useState(false);
    const [isShowingPartnershipProgram, setIsShowingPartnershipProgram] = useState(false);
    const [isShowingGetInvolved, setIsShowingGetInvolved] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    
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
                    <div className="fade-in flex justify-start space-x-16 italic" style={{ marginTop: "20px", opacity: 0, animation: "fadeIn 1s ease-in forwards", animationDelay: "0s" }}>
                        <h1 className={`text-4xl eco-greentext ${poppins.className}`}>Our Mission</h1>
                    </div>
                        
                )}
                {isMounted && (
                    <div className="blue-row rounded-lg -translate-x-4 fade-in flex flex-row justify-start space-x-16" style={{ marginTop: "20px", opacity: 0, animation: "fadeIn 2s ease-in forwards", animationDelay: "3s" }}>
                        <div className="flex flex-col">
                            <h2 className={`text-2xl tracking-widest leading-loose text-white text-left ${lato.className}`}>Amplify the voice of the Latino Communities in their pursuit of social and environmental justice through outreach, education and advocacy across the Chesapeake Bay region.</h2>
                            <Link href="/aboutus" passHref>  
                                <div className="flex justify-center" style={{ marginTop: "20px" }}>
                                    <Learnmorebutton />
                                </div>
                            </Link>
                        </div>
                        <Image src={ourmission} alt="our mission" height={300} width={600} className="text-blue-500 font-mono rounded-lg shadow-lg border-2" style={{ marginBottom: "20px" }} />
                    </div>
                )}
                {isMounted && (
                    <div className="fade-in space-x-16" style={{ marginTop: "40px", opacity: 0, animation: "fadeIn 3s ease-in forwards", animationDelay: "3s" }}>
                        <div className="fade-in flex flex-row justify-start space-x-16 italic">
                            <h1 className={`text-4xl  eco-greentext ${poppins.className}`}>Our Programs</h1> 
                        </div>
                        <div className="flex justify-start space-x-16 image-container" style={{ marginTop: "20px" , marginBottom: "100px"}}>
                            <div className="flex flex-col items-center group relative">
                                <Image src={scapingprogram} alt="Land Scaping Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Land Scaping Program</p>
                                
                                <button 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-green-700 ${poppins.className}`}
                                    onClick={() => setIsShowingLandScapeImage(true)}>
                                    Learn More
                                </button>
                                
                            </div>
                            {isShowingLandScapeImage && (
                                <div className="fixed w-screen h-screen bottom-20 top-0 right-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                                        <h2 className={`text-2xl font-mono font-bold mb-4 ${poppins.className}`}>Landscaping Program</h2>
                                        <p className={`text-gray-600 font-mono tracking-wider ${lato.className}`}>
                                            Funded by the National Fish and Wildlife Foundation (NFWF)
                                            <br/><br/> Equitable landscaping was born out of a need to bridge a crucial gap in Chesapeake Bay's environmental training. Traditional programs overlook Spanish-speaking Latino landscapers, leaving them at a disadvantage. Our "Equitable Landscaping" initiative offers culturally relevant, Spanish-language training in green infrastructure, empowering Latinos as environmental stewards. Partnering with the Chesapeake Conservation Landscaping Council, we ensure inclusive education, enhancing skills and opportunities in the green job market while fostering environmental conservation and public health. Join to build a more diverse, skilled, and environmentally conscious community. 
                                            <br/><br/>Participants receive a certification at the end of training to increase competitiveness in the job market, as well as obtain access to quality environmental training.
                                        </p>
                                        <button 
                                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={() => setIsShowingLandScapeImage(false)}
                                        >
                                            Exit
                                        </button>
                                    </div>
                                </div> 
                            )}
                            <div className="flex flex-col items-center group relative">
                                <Image src={youthprogram} alt="Youth Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Youth Program</p>
                                
                                <button 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-green-700 ${poppins.className}`}
                                    onClick={() => setIsShowingYouthProgram(true)}>
                                    Learn More
                                </button>
                                
                            </div>
                            {isShowingYouthProgram && (
                                <div className="fixed w-screen h-screen top-0 right-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                                        <h2 className="text-2xl font-mono font-bold mb-4">Youth Program</h2>
                                        <p className="text-gray-600 font-mono tracking-wider">
                                            Funded by the National Park Service Chesapeake Gateways Trust<br/><br/>
                                            Latino and other minority youth have opportunities for environmental education, outdoor field trips, and green career exploration through year-long experiences! During the school year, an after-school component brings industry experts to foster diversity and inclusion in green careers. Then, students can participate in our summer camp. This program offers an array of destinations for high school students to have greater access to outdoors, be exposed to environmental experiences, and have fun! <br/><br/>
                                            High school students from two schools in Prince George’s and Montgomery County, one in each county, participate in this educational opportunity. 

                                        </p>
                                        <button 
                                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={() => setIsShowingYouthProgram(false)}
                                        >
                                            Exit
                                        </button>
                                    </div>
                                </div> 
                            )}
                            <div className="flex flex-col items-center group relative">
                                <Image src={placeprogram} alt="Outreach Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Outreach Program</p>
                                
                                <button 
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-green-700 ${poppins.className}`}
                                    onClick={() => setIsShowingOutreachProgram(true)}>
                                    Learn More
                                </button>
                                
                            </div>
                            {isShowingOutreachProgram && (
                                <div className="fixed w-screen h-screen top-0 right-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                                        <h2 className="text-2xl font-mono font-bold mb-4">Outreach Program</h2>
                                        <p className="text-gray-600 font-mono tracking-wider">This partnership provides classes to Spanish-speaking church members about stormwater runoff and environmental education, followed by installations of rain barrels in the homes of training participants.<br/><br/>
                                            Members of the church's youth program receive training while engaging in a storm drain mural project and two local cleanup activities that provide awareness and care of the environment.
                                        </p>
                                        <button 
                                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={() => setIsShowingOutreachProgram(false)}
                                        >
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col items-center group relative">
                                <Image src={partnershipprogram} alt="Partnership Program" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Partnership Program</p>
                                
                                <button 
                                
                                onClick={() => setIsShowingPartnershipProgram(true)}   className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-green-700 ${poppins.className}`}>
                                    Learn More
                                </button>
                                
                            </div>
                            {isShowingPartnershipProgram && (
                                <div className="fixed w-screen h-screen top-0 right-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                                        <h2 className="text-2xl font-mono font-bold mb-4">Partnership Program</h2>
                                        <p className="text-gray-600">EcoLatinos has partnered with several organizations located in the Chesapeake Bay region to promote Latino outreach and engagement. Some of these include:</p>
                                            <li className="font-bold font-mono">University of Maryland Sea Grant</li>
                                            <li className="font-bold font-mono">Potomac Riverkeeper Network water quality monitoring </li>
                                            <li className="font-bold font-mono">Contractors Training Program in D.C. Spanish Catholic Center (SCC)</li>
                                            <li className="font-bold font-mono">Catholic Charities, D.C.</li>
                                            <li className="font-bold font-mono">Festival Del Rio Anacostia at Bladensburg Waterfront Park</li>
                                            <li className="font-bold font-mono">National Housing Trust DOEE transition from gas to electrification focus group</li>
                                        <button 
                                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={() => setIsShowingPartnershipProgram(false)}
                                        >
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-col items-center group relative">
                                <Image src={getinvolved} alt="Join Us" height={200} width={200} className="text-blue-500 font-mono rounded-full shadow-lg border-2 hover:scale-125 hover:blur-sm duration-500" />
                                <p className="mt-2 text-center font-mono text-gray-600">Join Us</p>
                                
                                <button onClick={() => setIsShowingGetInvolved(true)} 
                                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 mt-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-green-700 ${poppins.className}`} >
                                    Learn More
                                </button>
                                
                            </div>
                            {isShowingGetInvolved && (
                                <div className="fixed w-screen h-screen top-0 right-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                                        <h2 className="text-2xl font-mono font-bold mb-4">Join Us</h2>
                                        
                                        <button 
                                            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={() => setIsShowingGetInvolved(false)}
                                        >
                                            Exit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                        
                )}
                {/* Subscription Text Entry Box */}
                <div className="flex flex-col items-center" style={{ marginTop: "40px",marginBottom: "100px", animation: "fadeIn 9s ease-in forwards", animationDelay: "9s" }}>
                    <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
                    <button onClick={() => setIsSubscribed(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
                </div>
                {isSubscribed && (
                    <div className="fixed w-screen h-screen top-0 right-10 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
                            <h2 className="text-2xl font-mono font-bold mb-4">Subscription Success</h2>
                            <p className="text-gray-600">You have successfully subscribed to our newsletter.</p>
                            <button 
                                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                onClick={() => setIsSubscribed(false)}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                )}
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


