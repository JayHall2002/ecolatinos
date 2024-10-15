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
      <h1 className="text-3xl font-sans text-center">Our Impact</h1>
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