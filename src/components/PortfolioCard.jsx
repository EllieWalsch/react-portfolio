export default function PortfolioCard({ projectData }) {
  return (
    <main className="mx-16 mt-10 grid grid-cols-1 justify-items-center gap-2 pb-3 sm:grid-cols-3 sm:grid-rows-2">
      {projectData.map((project) => {
        return (
          <figure className="hover:opacity-50">
            <a href={project.github}>
              <figcaption className="rounded-lg bg-lightpink px-5 text-center">
                {project.name}
              </figcaption>
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
