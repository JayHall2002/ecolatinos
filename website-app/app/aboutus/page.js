import Navbar from "../components/navbar";

export default function AboutUs () {
    return(
        <>
          <Navbar />  
          <h1 style={{color: "white", backgroundColor: "Green",
            padding: "10px", fontFamily: "Sans-Serif",
            textalign: "center", margin: "10px"}}>About Us</h1>  
          <Description />

        </>
    );
};

function Description() {
  return ( 
    <p style={{fontFamily: "Arial", color: "black", margin: "10px"}}> EcoLatinos was born out of our passion for the environment and love for our Latino community. 
      We are committed to social and environmental justice initiatives for all, especially the Spanish-speaking 
      and under resourced communities in the Mid-Atlantic.
    </p>
  );
}
