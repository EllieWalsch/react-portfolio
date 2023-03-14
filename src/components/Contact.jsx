import React from "react";
import checkEmail from "../utils/checkEmail";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [alert, setAlert] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Check to see if the email is not valid or if the name/message is empty. If so we set an error message to be displayed on the page.
    if (!name || !message) {
      setAlert("Please enter the required fields");
      return;
    }
    if (!checkEmail(email)) {
      setAlert("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail("");
    setName("");
    setMessage("");
    setAlert("Thank you for reaching out!");
  };

  return (
    <main className="mt-10 flex flex-col items-center gap-5">
      <form className="flex flex-col items-center rounded-md border-4 border-green p-3">
        <label className="mt-3 self-start" htmlFor="Name">
          Name
        </label>
        <div>
          <input
            className="rounded"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            onBlur={(event) => {
              if (!name) setAlert("Name is required");
            }}
            onFocus={() => setAlert("")}
          />
        </div>

        <label className="mt-3 self-start" htmlFor="Email">
          Email Address
        </label>
        <div>
          <input
            className="rounded"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            onBlur={(event) => {
              if (!email) setAlert("Email is required");
            }}
            onFocus={() => setAlert("")}
          />
        </div>

        <label className="mt-3 self-start" htmlFor="Message">
          Message
        </label>
        <div>
          <textarea
            className="rounded"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            onBlur={(event) => {
              if (!message) setAlert("Message is required");
            }}
            onFocus={() => setAlert("")}
          ></textarea>
        </div>

        <button
          className="mt-3 rounded-lg bg-lightpink px-20 py-2 text-center"
          type="submit"
          onClick={handleFormSubmit}
        >
          Send
        </button>
      </form>
      {alert && (
        <div>
          <p>{alert}</p>
        </div>
      )}
    </main>
  );
}
