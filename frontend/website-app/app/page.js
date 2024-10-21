import Navbar from "../../website-app/app/components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            {/* Main container with padding */}
            <div style={{ padding: "20px" }}>
                
                {/* Facebook Page Embed - This section centers the Facebook page embed in the middle of the page */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                    <iframe
                        // The Facebook page plugin is embedded using an iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEcoLatinos&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="500" // Sets the width of the iframe
                        height="600" // Sets the height of the iframe
                        style={{ border: "none", overflow: "hidden" }} // Ensures no borders or overflow within the iframe
                        scrolling="no" // Disables scrolling inside the iframe
                        frameBorder="0" // Removes the border from the iframe
                        allowFullScreen={true} // Allows the iframe to be viewed in fullscreen mode
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" // Permissions for the iframe content
                    ></iframe>
                </div>

                {/* Section for welcome text with centered alignment */}
                <div style={{ padding: "40px", textAlign: "center" }}>
                    {/* Welcome message */}
                    <h2 style={{ color: "#3ea23e" }}>Welcome to EcoLatinos</h2>
                    {/* Short description of the organization's mission */}
                    <p>We are dedicated to promoting environmental and social justice, especially within Spanish-speaking and under-resourced communities.</p>

                    {/* Input textbox for user's name */}
                    <input
                        type="text" // Input type set to text
                        placeholder="Enter your name" // Placeholder text guiding user input
                        style={{
                            width: "100%", // Full width of the container
                            maxWidth: "600px", // Limits the maximum width
                            padding: "10px", // Padding inside the textbox
                            marginBottom: "20px", // Space below the textbox
                            border: "2px solid #3ea23e", // Green border style
                            borderRadius: "5px" // Rounded corners for the textbox
                        }}
                    />
                    <br /> {/* Line break for spacing */}

                    {/* Input textbox for user's email */}
                    <input
                        type="email" // Input type set to email
                        placeholder="Enter your email" // Placeholder text guiding user input
                        style={{
                            width: "100%", // Full width of the container
                            maxWidth: "600px", // Limits the maximum width
                            padding: "10px", // Padding inside the textbox
                            marginBottom: "20px", // Space below the textbox
                            border: "2px solid #3ea23e", // Green border style
                            borderRadius: "5px" // Rounded corners for the textbox
                        }}
                    />
                    <br /> {/* Line break for spacing */}

                    {/* Textarea for user's message input */}
                    <textarea
                        placeholder="Enter your message" // Placeholder text guiding user input
                        rows="4" // Sets the number of visible text lines
                        style={{
                            width: "100%", // Full width of the container
                            maxWidth: "600px", // Limits the maximum width
                            padding: "10px", // Padding inside the textbox
                            border: "2px solid #3ea23e", // Green border style
                            borderRadius: "5px" // Rounded corners for the textbox
                        }}
                    />
                </div>

                {/* Footer section at the bottom of the page */}
                <footer style={{
                    backgroundColor: "#3ea23e", // Green background color
                    color: "white", // White text color
                    textAlign: "center", // Centered text
                    padding: "20px" // Padding inside the footer
                }}>
                    <p>© 2024 EcoLatinos - All Rights Reserved</p> {/* Copyright notice */}
                </footer>
            </div>
        </>
    );
}
