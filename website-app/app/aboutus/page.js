import Navbar from "../components/navbar";

export default function AboutUs () {
    return(
        <>
          
          <Navbar />  
          <h1>About Us</h1>  
          <Description />

        </>
    );
};

function Description() {
  return ( 
    <p> EcoLatinos was born out of our passion for the environment and love for our Latino community. </p>
  );
}
