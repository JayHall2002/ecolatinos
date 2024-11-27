import React from 'react'
import "./VideoStyles.css"
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Lato } from 'next/font/google';


const poppins = Poppins({
  weight: "900",
  subsets: ['latin'],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});



const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            {/* Add the landscaping video to the source and make sure its
                type is recorded as a mp4 video. */}
            <source src="/videos/enviornmental_work.mp4" type='video/mp4'/>
                {/* The code below adds a heading and a brief paragraph below. */}
        </video>
        <div className='content'>
                <h1 style={{color:"white", margin: '10px'}} className={`text-2xl tracking-widest leading-loose text-white ${poppins.className}`}>Environment.Preservation.</h1>
                <p style={{color:"white", margin: '10px'}} className={`text-2xl tracking-widest leading-loose text-white ${poppins.className}`}>The organization that's most concerned with the Environment</p>
        </div>
    </div>
  )
}

export default Video;