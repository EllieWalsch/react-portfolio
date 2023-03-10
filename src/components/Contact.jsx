import checkEmail from "../utils/checkEmail";
import React from "react";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!checkEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail("");
  };

  return (
    <main className="mt-10 flex justify-center">
      <form>
        <label htmlFor="Name">Name</label>
        <div>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="Email">Email Address</label>
          <div>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="Message">Message</label>
          <div>
            <textarea></textarea>
          </div>
        </div>

        <button
          className="rounded-lg bg-lightpink px-5 text-center"
          type="submit"
          onClick={handleFormSubmit}
        >
          Send
        </button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </main>
  );
}
