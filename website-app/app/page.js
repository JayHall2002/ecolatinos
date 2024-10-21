import Navbar from "../../website-app/app/components/navbar";

export default function Home() {
    return (
        <>
            <div style={{ padding: "20px" }}>
                {/* Facebook Page Embed - Centered */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEcoLatinos&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="500"
                        height="600"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>

                {/* Welcome Text */}
                <div style={{ padding: "40px", textAlign: "center" }}>
                    <h2 style={{ color: "#3ea23e" }}>Welcome to EcoLatinos</h2>
                    <p>We are dedicated to promoting environmental and social justice, especially within Spanish-speaking and under-resourced communities.</p>

                    {/* Textboxes for User Input */}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            padding: "10px",
                            marginBottom: "20px",
                            border: "2px solid #3ea23e",
                            borderRadius: "5px"
                        }}
                    />
                    <br />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            padding: "10px",
                            marginBottom: "20px",
                            border: "2px solid #3ea23e",
                            borderRadius: "5px"
                        }}
                    />
                    <br />

                    <textarea
                        placeholder="Enter your message"
                        rows="4"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            padding: "10px",
                            border: "2px solid #3ea23e",
                            borderRadius: "5px"
                        }}
                    />
                </div>

                {/* Footer */}
                <footer style={{
                    backgroundColor: "#3ea23e",
                    color: "white",
                    textAlign: "center",
                    padding: "20px"
                }}>
                    <p>© 2024 EcoLatinos - All Rights Reserved</p>
                </footer>
            </div>
        </>
    );
}
