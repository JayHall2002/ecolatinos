import Navbar from "../components/navbar";
import Link from "next/link";

export default function Contact () {
    return(
        <div>
            <Navbar />
            <div className="text-4xl font-sans font-bold text-center text-blue-600">
                <h1>Contact Us</h1>
            </div>
            <Link href="https://www.facebook.com/ecolatinos/" target="_blank" passHref>
                <div className="container mx-auto text-center mt-7">
                    <button className="items-center rounded-full 
                    border-2 border-black-600 
                    bg-green-600 px-4 py-2 text-white
                    hover:scale-125 hover:bg-green-700"
                    >
                        Our Facebook
                    </button>
                </div>
            </Link>
        </div>
    );
};