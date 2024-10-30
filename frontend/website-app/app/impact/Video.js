import React from 'react'
import "./VideoStyles.css"
import Link from "next/link";

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            {/* Add the landscaping video to the source and make sure its
                type is recorded as a mp4 video. */}
            <source src="/videos/landscaping_work.mp4" type='video/mp4'/>
                {/* The code below adds a heading and a brief paragraph below. */}
            <div className='content'>
                <h1>Environment.Preservation.</h1>
                <p>The first organization that offers green infrastructure training to Latinos</p>
            </div>
        </video>
    </div>
  )
}

export default Video