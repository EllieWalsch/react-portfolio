export default function AboutMe() {
  return (
    <main className="mt-20 flex flex-col items-center gap-5">
      <p className="w-2/4 text-center">
        ABOUT ME: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <figure>
        <img
          className="rounded-full"
          src="src\images\me-2.jpg"
          alt=""
          width="250"
          height="181"
        />
      </figure>
    </main>
  );
}
