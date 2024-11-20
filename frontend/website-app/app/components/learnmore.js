import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: "900", // Black font weight
    subsets: ["latin"], // Ensure proper subset
})
export default function learnMoreButton() {
    return (
        <button className={`bg-White-500 hover:scale-125 hover:border-blue-200 duration-1000 hover:text-white hover:bg-blue-700 text-blue-500 border-4 border-blue-500 py-2 px-4 rounded ${poppins.className}`} style={{ width: "200px", height: "50px", top: "50px", right: "0" }}>
            Learn More
        </button>
    );
}