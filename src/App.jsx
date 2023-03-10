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

    const clickedLinkText = event.target.textContent;
    setCurrentPath("/" + clickedLinkText.toLowerCase());
  };

  // TODO: Where to put switch case statements?
  // This example will stay on the homepage the entire time
  // it would be beneficial to change the URL for each component

  return (
    <>
      <h1 className="mt-5 ml-2 text-center text-5xl font-bold text-orange">
        Ellie Walsch
      </h1>
      <NavBar handleClick={handleNavClick} />
      <p className="mt-5 text-center">┉┈◈◉◈┈┉</p>
      <Title text={currentPath.slice(1).toUpperCase() || "ABOUT"} />
      <MainContainer currentPath={currentPath} />
      <Footer />
    </>
  );
}

export default App;
