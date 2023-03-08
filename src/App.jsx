import NavBar from "./components/NavBar";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="mt-5 ml-2 text-5xl font-bold">Ellie Walsch</h1>
      <NavBar />
      <Title />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
