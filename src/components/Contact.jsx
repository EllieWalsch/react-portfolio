export default function Contact() {
  return (
    <main className="flex justify-center">
      <form>
        <label htmlFor="Name">Name</label>
        <div>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="Email">Email Address</label>
          <div>
            <input type="email" />
          </div>
        </div>

        <div>
          <label htmlFor="Message">Message</label>
          <div>
            <textarea></textarea>
          </div>
        </div>

        <button className="text-center" type="submit">
          Send
        </button>
      </form>
    </main>
  );
}
