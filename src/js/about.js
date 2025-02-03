import React from 'react';
import './App.css';  // Imports App.css from the parent folder


const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            <a href="" className="glightbox pulsating-play-btn"></a>
          </div>

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <h3>About Us</h3>
            <p>
            At CureMate, we believe that healthcare should be accessible, efficient, and personalized. Our mission is to revolutionize patient care by providing a seamless pltaform that connects users with medical professionals, tracks health progress, and offers expert guidance—all in one place.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-vial-circle-check"></i>
                <div>
                  <h5>Instant Doctor Access</h5>
                  <p> Connect with certified healthcare professionals in real-time through video calls, chat, or in-person appointments. Our platform ensures quick and hassle-free communication, eliminating long waiting times.</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-pump-medical"></i>
                <div>
                  <h5>Comprehensive Medical History Storage</h5>
                  <p>Keep all your past medical records, test reports, prescriptions, and doctor recommendations in one secure place. This ensures doctors have a clear understanding of your health history for better diagnosis and treatment.</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-heart-circle-xmark"></i>
                <div>
                  <h5>Prescription & Test Management</h5>
                  <p>Easily access past prescriptions and lab results, schedule follow-up tests, and receive automated reminders for medication adherence.</p>
                </div>
             
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
