import Link from "next/link";
import "../../app/globals.css";

export default function Navbar () {
    return(
        <nav className="bg-white-800 text-blue py-4">
            <div className="container mx-auto flex  justify-between items-center">
                <Link href="/" passHref>
                    <h1 className="text-4xl text-blue-400 hover:scale-110 hover:text-gray-900 font-bold">EcoLatinos</h1>
                </Link>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400 ">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutus" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                About Us
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/donation" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Donations
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Contact Us
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/impact" passHref>
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                            before:bottom-0 before:left-0 before:bg-black
                            before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                            before:transition before:ease-in-out before:duration-700 hover:text-blue-400">
                                Our Impact
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}