// import AboutMe from "./components/AboutMe";
import React from "react";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import Title from "./components/Title";

function App() {
  const [currentPath, setCurrentPath] = React.useState("/");

  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentPath("/" + event.target.textContent.toLowerCase());
  };

  return (
    <>
      <h1 className="mt-5 ml-2 text-5xl font-bold">Ellie Walsch</h1>
      <NavBar handleClick={handleNavClick} />
      <Title text={"Test"} />
      <MainContainer currentPath={currentPath} />
      <Footer />
    </>
  );
}

export default App;
