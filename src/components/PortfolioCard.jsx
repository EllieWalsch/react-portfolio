export default function PortfolioCard() {
  return (
    <main className="mx-16 mt-10 grid grid-cols-3 grid-rows-2 justify-items-center gap-2 pb-3">
      <figure className="hover:opacity-50">
        <figcaption className="text-center">FBI Profiler</figcaption>
        <img src="src\images\fbi.png" alt="" width="400" height="186" />
      </figure>
      <figure>
        <figcaption>JATE</figcaption>
        <img src="src\images\JATE.png" alt="" width="400" height="186" />
      </figure>
      <figure>
        <figcaption>Password Generator</figcaption>
        <img src="src\images\password.png" alt="" width="400" height="186" />
      </figure>
      <figure>
        <figcaption>Coding Quiz</figcaption>
        <img src="src\images\quiz.png" alt="" width="400" height="186" />
      </figure>
      <figure>
        <figcaption>Work Day Scheduler</figcaption>
        <img src="src\images\schedule.png" alt="" width="400" height="186" />
      </figure>
      <figure>
        <figcaption>Food Finder</figcaption>
        <img
          src="src\images\Food-finder3.png"
          alt=""
          width="400"
          height="186"
        />
      </figure>
    </main>
  );
}
