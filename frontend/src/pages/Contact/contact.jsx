function Contact() {
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Layout>
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
        <h2>Our Address</h2>
        <p>PCEA Embakasi, Nairobi, Kenya</p>
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Layout>
    );
  }
  export default Contact;
  