import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import victor from "../../app/images/vrpfp.jpeg";
import emily from "../../app/images/efpfp.jpeg";
import ruby from "../../app/images/rspfp.jpeg";
import sandy from "../../app/images/sjpfp.jpeg";    
export default function Contact () {
    return(
        <div>
            <Navbar />
            {/* Profile Pictures of Leaders */}
            <div className="flex justify-center space-x-8">
              <div className="w-1/2 flex justify-center">
                <div className="flex flex-col items-center">
                  <Image src={victor} alt="Victor Profile Picture" className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700" />
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Victor</p>
                    <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Chairmen of the Board</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-start translate-x-8">
                <div className="flex flex-col items-center">
                  <Image src={emily} alt="Emily Profile Picture" className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700" />
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Emily</p>
                    <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Secretary</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-start">
                <div className="flex flex-col items-center">
                  <Image src={ruby} alt="Ruby Profile Picture" className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700" />
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Ruby</p>
                    <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Founder, CEO</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-start">
                <div className="flex flex-col items-center">
                  <Image src={sandy} alt="Sandy Profile Picture" className="rounded-full h-48 w-48 hover:scale-125 hover:transition hover:ease-in-out hover:duration-700" />
                  <div className="text-center mt-2">
                    <p className="text-lg font-bold hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Sandy</p>
                    <p className="text-md text-gray-600 hover:text-green-600 hover:transition hover:ease-in-out hover:duration-700">Chair of the Board</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Buttons */}
            {/* Pinging Blue Button */}
            <div className="flex justify-center translate-y-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full flex items-center justify-center w-12 h-12">
                <svg className="animate-ping w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
            </div>
            {/* Facebook and Instagram Buttons */}
            <div className="contactbuttons flex mt-8 justify-center space-x-8 translate-y-8">
                <Link href="https://www.facebook.com/ecolatinos/" target="_blank" passHref>
                    <div className="text-center">
                        <button className="items-center rounded-lg 
                        border-2 border-black-600 
                        bg-green-600 px-4 py-2 text-white
                        hover:scale-125 hover:bg-green-700"
                        >
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
};