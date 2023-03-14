export default function AboutMe() {
  return (
    <main className="mt-11 flex flex-col items-center gap-5">
      <p className="w-2/4 text-center">
        Hi! My name is Ellie Walsch. I'm a current WashU bootcamp student and
        I'm excited to break into the world of coding! I have experience with
        Javascript, MERN, and React. Please visit my portfolio page to check out
        some of my previous work! Feel free to reach out with any questions on
        the contact page.
      </p>
      <figure>
        <img
          className="rounded-full"
          src="./src/images/me-2.jpg"
          alt=""
          width="250"
          height="181"
        />
      </figure>
    </main>
  );
}
