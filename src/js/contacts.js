import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Contact</h2>
        <p></p>
      </div>
      {/* End Section Title */}

      {/* Google Maps */}
      <div className="mb-5">
        <iframe
          style={{ border: 0, width: "100%", height: "270px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4883174.283754899!2d77.412615!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d719c7ebf5ebd%3A0x9d59f0b3c37c935b!2sIndia!5e0!3m2!1sen!2sin!4v1706789123456!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* End Google Maps */}

      <div className="container">
        <div className="row gy-4">
          {/* Info Items */}
          <div className="col-lg-4">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>Vellore, Tamil Nadu</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 123456789</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>curemate@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
