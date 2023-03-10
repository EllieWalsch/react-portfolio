export default function PortfolioCard({ projectData }) {
  return (
    <main className="mx-16 mt-10 grid grid-cols-3 grid-rows-2 justify-items-center gap-2 pb-3">
      {projectData.map((project) => {
        return (
          <figure className="hover:opacity-50">
            <figcaption className="text-center">{project.name}</figcaption>
            <img src={project.src} alt="" width="400" height="186" />
          </figure>
        );
      })}
    </main>
  );
}
