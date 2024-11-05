"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import bgpic from "../images/pexels-felixmittermeier-957024.jpg";

export default function Contact() {
    const [hoveredProfile, setHoveredProfile] = useState(null); // State for tracking hovered profile

    return (
        <>
        <Navbar />
        <div className="relative">
            

            {/* Background Image */}
            <div className="absolute inset-0 " style={{ marginTop: "40px", opacity: 0, animation: "fadeIn 3s ease-in forwards", animationDelay: "1s" }}>
                <Image src={bgpic} alt="Contact Background" layout="fill" objectFit="cover" className="opacity-70 blur-sm" />
            </div>

            {/* Contact Form Container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-5" style={{ marginTop: "40px", opacity: 0, animation: "fadeIn 3s ease-in forwards", animationDelay: "2s" }}>
                <h1 className="text-5xl font-bold font-mono text-white mb-8 text-center">Get in Touch With EcoLatinos</h1>
                <p className="text-lg text-white mb-4 font-mono text-center">We'd love to hear from you! Please fill out the form below.</p>

                <form className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}
