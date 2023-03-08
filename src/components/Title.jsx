import PropTypes from "prop-types";

export default function Title({ text }) {
  return (
    <header className="flex justify-center">
      <h2 className="mt-10 w-2/4 text-2xl">{text}</h2>
    </header>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
