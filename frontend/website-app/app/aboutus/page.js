"use client"; // This directive indicates that this component should be rendered on the client-side.
import Navbar from "../components/navbar";
import "../styles.css";
import { useState, useEffect } from "react";
import Donationbutton from "../components/donate";
import Link from "next/link";
import victor from "../images/vrpfp.jpeg";
import emily from "../images/efpfp.jpeg";
import ruby from "../images/rspfp.jpeg";
import sandi from "../images/sjpfp.jpeg";
import Image from "next/image";

export default function AboutUs () {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);   
    return(
      <>
        <div className={isMounted ? "fade-in" : ""} style={{ padding: "5px" }}>
                <Donationbutton style={{ marginBottom: "5px" , }} />
                <Navbar />
        </div>
        <div className={isMounted ? "fade-in" : ""} style={{ padding: "0px", position: "relative"}}>
            <video
            autoPlay
            muted
            loop
            style={{  
                width: "100%",
                height: "600px",
                objectFit: "cover",
                position: "relative",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
            >
              <source src="/videos/aboutusintro.mp4" type="video/mp4" />
            </video>
            <div style={{
                position: "absolute",
                bottom: "10%",  
                width: "100%",
                textAlign: "center",
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
            }} className="font-mono -translate-y-96">
                About Us
                <p className="font-mono text-sm">Creating A World Where Latinos Leave Their Green Footprint on Earth</p>
            </div>
            <h1 className="font-mono text-4xl text-blue-500 relative font-semibold translate-y-20">Who We Are</h1>
            <div className="relative translate-y-24 font-mono font-semibold  mt-5 " style={{ padding: "5px", width: "100%", margin: "auto"}}>
              <h2>Ruby Rozo Stemmle, visionary founder and CEO of ecoLatinos, which was founded in 2015 and in 2018 it became a 501(c)(3) nonprofit,
              embarked on her journey driven by an unwavering dedication to the stewardship of our cherished Madre Tierra and an unyielding commitment to
              the principles of social and environmental justice. With a profound understanding cultivated over more than 15 years of distinguished service in
              government relations, public engagement, and inclusive outreach, Ruby believes that communities of color are a great natural ally for
              conservation and environmental efforts and other marginalized groups. Ruby's strategic acumen and unwavering advocacy have propelled
              EcoLatinos to the forefront of environmental activism, catalyzing meaningful change and fostering a culture of inclusivity and empowerment within
              under-resourced and minority communities.</h2>
            </div>
            
        </div>
        <div className={isMounted ? "fade-in" : ""}>
          <div className=" text-blue-500 text-4xl translate-y-24 font-mono font-semibold  mt-5 " style={{ padding: "5px", width: "100%", marginBottom: "20px", position: "relative"}}>
            <h1>What We Are Up To</h1>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", height: "400px", width: "500px", margin: "auto"  }}>
              <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEcoLatinos&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              style={{ border: "4px", overflow: "hidden", height: "400px", width: "600px" }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <h1 className="font-mono text-4xl text-blue-500 relative font-semibold translate-y-24 tracking-widest">Meet Our Team</h1>
          <div className="Image translate-y-32 flex space-x-36 justify-center ">
            <div style={{ textAlign: "center", position: "relative" }}>
              <Image src={ruby} alt="Ruby" width={200} height={200} className="Ruby-group relative rounded-full shadow-2xl border-4 "/>
              <p className="mt-2 font-mono text-md text-blue-500 hover:text-green-600">Ruby</p>
            </div>
            <div style={{ textAlign: "center", position: "relative" }}>
              <Image src={victor} alt="Victor" width={200} height={200} className="Victor-group relative rounded-full shadow-2xl border-4 "/>
              <p className="mt-2 font-mono text-md text-blue-500 hover:text-green-600">Victor</p>
            </div>
            <div style={{ textAlign: "center", position: "relative" }}>
              <Image src={emily} alt="Emily" width={200} height={200} className="Emily-group relative rounded-full shadow-2xl border-4 "/>
              <p className="mt-2 font-mono text-md text-blue-500 hover:text-green-600">Emily</p>
            </div>
            <div style={{ textAlign: "center", position: "relative" }}>
              <Image src={sandi} alt="Sandi" width={200} height={200} className="Sandi-group relative rounded-full shadow-2xl border-4 "/>
              <p className="mt-2 font-mono text-md text-blue-500 hover:text-green-600">Sandi</p>
            </div>
          </div>
        </div>
        
        
      </>
    )

}