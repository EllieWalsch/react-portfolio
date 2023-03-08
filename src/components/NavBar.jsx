export default function NavBar() {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-5">
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
