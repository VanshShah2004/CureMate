import React, { usestate } from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">CureMate</span>
              </a>
              <div className="footer-contact pt-3">
                <p>
                  CureMate is a platform that connects patients with doctors,
                  providing personalized medical recommendations based on
                  patient reports and databases. It bridges the healthcare gap
                  by offering efficient doctor recommendations for improved
                  patient care.
                </p>

                <p>Vellore, Tamil Nadu</p>
                <p>India, 632014</p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Pulse Parameters</a>
                </li>
                <li>
                  <a href="#">Report Testing</a>
                </li>
                <li>
                  <a href="#">Book Appointments</a>
                </li>
                <li>
                  <a href="#">Doctor Consultation</a>
                </li>
                <li>
                  <a href="#">Health Metrics</a>
                </li>
              </ul>
            </div>
   

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a href="mailto:vansh@jackhack.com">Vansh Mitul Shah</a>
                </li>
                <li>
                  <a href="mailto:ashish@jackhack.com">Ashish Raj</a>
                </li>
                <li>
                  <a href="mailto:anazmullu@jackhack.co">Anas Aziz Khan</a>
                </li>
                <li>
                  <a href="tel:+91 1234567890">Call us: +91 1234567890</a>
                </li>
                <li>
                  <a href="mailto:anazmullu@jackhack.co">
                    curemate@jackhack.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">CureMate</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by {"JackHack "}
            <a
              href="https://curemate.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* GITHUB */}
            </a>
          </div>
        </div>
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
