export default function NavBar({ handleClick }) {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-5">
        <li>
          <a href="/about" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <a href="/portfolio" onClick={handleClick}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="/resume" onClick={handleClick}>
            Resume
          </a>
        </li>
        <li>
          <a href="/contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
