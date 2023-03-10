import PropTypes from "prop-types";
import projectData from "../data/projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import PortfolioCard from "./PortfolioCard";
import Resume from "./Resume";

export default function MainContainer({ currentPath }) {
  console.log(currentPath);
  switch (currentPath) {
    case "/portfolio":
      return <PortfolioCard projectData={projectData} key={projectData.id} />;
    case "/resume":
      return <Resume />;
    case "/contact":
      return <Contact />;
    default:
      return <AboutMe />;
  }
}

MainContainer.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
