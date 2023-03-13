import PropTypes from "prop-types";

export default function Title({ text }) {
  return (
    <header className="flex justify-center">
      <h2 className="mt-5 text-2xl font-semibold text-green sm:w-2/4">
        {text}
      </h2>
    </header>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
