import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import PortfolioCard from "./components/PortfolioCard";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <h1 className="mt-5 ml-2 text-5xl font-bold">Ellie Walsch</h1>
      <NavBar />
      <Title text={"Test"} />
      <AboutMe />
      <PortfolioCard />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
