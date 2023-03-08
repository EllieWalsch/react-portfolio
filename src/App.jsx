import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PortfolioCard from "./components/PortfolioCard";
import Resume from "./components/Resume";
import Title from "./components/Title";

function App() {
  const handleNavClick = (event) => {
    event.preventDefault();
    console.log("clicked!");
  };

  return (
    <>
      <h1 className="mt-5 ml-2 text-5xl font-bold">Ellie Walsch</h1>
      <NavBar handleClick={handleNavClick} />
      <Title text={"Test"} />
      <AboutMe />
      <PortfolioCard />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
