import Navbar from "../components/navbar.js";
import wheatonhigh from "wheaton_high_panel.jpg"


export default function Impact () {
    return(
        <>
          <Navbar />
          <Header />
          <Paragraph1 />

          <SubHeader1 />
          <Paragraph2 />
          <Footer />
        </>
    );
};

function Paragraph1() {
  return (
    <p>
      EcoLatinos has completed projects in areas like Tree planting, cleaning up the Anacostia Northwest Branch, 
      providing outreach consulting services for Hispanic communities in the Mid-Atlantic region. They have also 
      expanded their audience base. 
    </p>
  );
}

function SubHeader1() {
  return (
    <h1 style={{color: "black", backgroundColor:"lightblue"}}> 2024 Youth Environmental Summer camp program </h1>
  )
}

function Paragraph2() {
  return (
    <p>
      The 2024 Youth Environmental Summer camp program occured from July 8th to July 19th, 2024 for the 
      high-school students from Price George's and Montgomery counties in Maryland. 
    </p>
  )
}


// This allows us to access data from a user.
function GetFacebookData() {
  const accessToken = "EAAPUDZAlrZAkUBO42gLYpBDjrlDashPispIcYbMIGVQVvs0KYussG69KVHVhH8ehLGTpd1v97ktDSb0ugbHcY9SS9yABTItEZCq5hVa9QvBxFk0fZC7CTdJ0HqpeUAqnhgW3wyYQZBPoI3y2729j9yOjbgdF4Fy0N9iwwpLAsvKvtHIWwy9DmkPjWnSI7vchrJOA5wZC64RwhzuihxNgZDZD";
  const userId = "2790045887835785";
  // Fetch the data from Facebook Graphs API.
  return fetch(`https://graph.facebook.com/v21.0/${userId}?access_token=${accessToken}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
}

function Header() {
  // Make the header have some styles.
  const myStyle = { color: "white", backgroundColor: "Green",
    padding: "10px", fontFamily: "Sans-Serif",
    textalign: "center"
  };

  return (
    <header>
      <h1 style={myStyle}>Our Impact</h1>
      <p>See how we're making a difference.</p>
    </header>
  );
}

function Footer() {
  // Make the footer have certain styles. 
  const footerStyle = {
    color: "white",
    backgroundColor: "Green",
    padding: "10px",
    fontFamily: "Sans-Serif"
  }

  return (
    <footer>
      <p style={footerStyle}>Join us in making a difference!</p>
    </footer>
  );
}