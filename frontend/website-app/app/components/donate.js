import Link from "next/link";

export default function Donationbutton() {
    return (
        <Link href="/donation" passHref>
            <button className="bg-White-500 hover:scale-125 hover:border-blue-200 duration-1000 hover:text-white hover:bg-blue-700 text-blue-500 border-4 border-blue-500 font-bold py-2 px-4 rounded" style={{ width: "200px", height: "50px", top: "50px", right: "0" }}>
                Donate
            </button>
        </Link>
    );
}