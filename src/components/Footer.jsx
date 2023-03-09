export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 h-10">
      <ul className="flex flex-row justify-center gap-5">
        <li className="rounded-lg bg-darkpink px-5 opacity-75 hover:bg-lightpink">
          <a
            href="https://github.com/EllieWalsch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className="rounded-lg bg-darkpink px-5 opacity-75 hover:bg-lightpink">
          <a
            href="https://www.linkedin.com/in/ellie-walsch-691622251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
