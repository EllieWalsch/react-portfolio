export default function PortfolioCard({ projectData }) {
  return (
    <main className="mx-16 mt-10 grid grid-cols-3 grid-rows-2 justify-items-center gap-2 pb-3">
      {projectData.map((project) => {
        return (
          <figure className="hover:opacity-50">
            <figcaption className="text-center text-lg">
              {project.name}
            </figcaption>
            <a
              className="rounded-lg bg-lightpink px-5 text-center"
              href={project.github}
            >
              Github
            </a>
            <a href={project.deployed}>
              <img src={project.src} alt="" width="400" height="186" />
            </a>
          </figure>
        );
      })}
    </main>
  );
}
