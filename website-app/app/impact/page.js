import Navbar from "../components/navbar.js";

export default function Impact () {
    return(
        <>
          <Navbar />
          <Header />
          <Footer />
        </>
    );
};



function Header() {
  return (
    <header>
      <h1>Our Impact</h1>
      <p>See how we're making a difference.</p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Join us in making a difference!</p>
    </footer>
  );
}