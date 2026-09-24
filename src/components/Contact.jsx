import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:v.mon.vincent@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-content">
        <p className="eyebrow">Have a project?</p>

        <h2>Let's work together.</h2>

        <p>
          Send me a message about a project, collaboration, or development
          opportunity.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Your name</label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Your message</label>

            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me about your project"
              rows="6"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;