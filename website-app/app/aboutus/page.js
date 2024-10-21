import Navbar from "../components/navbar";

export default function AboutUs () {
    return(
        <>
          <Navbar />  
          <h1 style={{color: "white", backgroundColor: "Green",
            padding: "10px", fontFamily: "Sans-Serif",
            textalign: "center", margin: "10px"}}>About Us</h1>  
          <Description />
          <DescriptionP2 />
          {/* List of areas where the organization works in. */}
          <h2 style={{color: "white", backgroundColor:"Teal", padding: "10px", fontFamily: "Sans-Serif",
            textalign: "center", margin: "10px"}}>Areas of Work</h2>
          <WorkList />
        </>
    );
};

// Areas of work for the organization.
const areasOfWork = [
  {
    id: 1, 
    area: "Tree planting"
  }, 
  {
    id: 2,
    area: "Clean-up and care for Anacostia Northwest Branch"
  }, 
  {
    id: 3,
    area: "Stormwater mitigation systems in Montgomery County"
  },
  {
    id: 4,
    area: "Community Tree Stewardship"
  },
  {
    id: 5, 
    area: "Bilingual Support Services for Alice Ferguson Foundation"
  }
];

// Introductory paragraph that explains what the organization does on large scale.
function Description() {
  return ( 
    <p style={{fontFamily: "Arial", color: "black", margin: "10px"}}> EcoLatinos was born out of our passion for the environment and love for our Latino community. 
      We are committed to social and environmental justice initiatives for all, especially the Spanish-speaking 
      and under resourced communities in the Mid-Atlantic.
    </p>
  );
}

function DescriptionP2() {
  return (
    <p style={{fontFamily: "Arial", color: "black", margin: "10px"}}> The organization works to engage, educate and activate the Latino communities of the Mid-Atlantic 
    region. They also support non-profit, private, and public organizations creating connections with growing and powerful stewards of the community.
    </p>
  )
}

// Render the list of work areas
function WorkList() {
  const listItems = areasOfWork.map(work => 
    <li style={{padding: '10px', margin:"10px"}}>{work.area}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}