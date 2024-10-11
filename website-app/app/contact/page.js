import Navbar from "../components/navbar";
import Link from "next/link";

export default function Contact () {
    return(
        <div>
            <Navbar />
            <div className="text-4xl font-sans font-bold text-center text-blue-600">
                <h1>Contact Us</h1>
            </div>
            <div className="contactbuttons flex justify-center space-x-8 translate-y-8">
                <Link href="https://www.facebook.com/ecolatinos/" target="_blank" passHref>
                    <div className="text-center">
                        <button className="items-center rounded-full 
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
                        <button className="rounded-full border-2 border-black-600 
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
                    Contact Information
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