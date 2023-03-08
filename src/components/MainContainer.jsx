import AboutMe from "./AboutMe";
import Contact from "./Contact";
import PortfolioCard from "./PortfolioCard";
import Resume from "./Resume";

export default function MainContainer({ currentPath }) {
  switch (currentPath) {
    case "/about":
      return <AboutMe />;
    case "/portfolio":
      return <PortfolioCard />;
    case "/resume":
      return <Resume />;
    case "/contact":
      return <Contact />;
  }
}
