import React from 'react';

const HeroSection = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
        <div className="container position-relative">
          <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
            <h2>WELCOME TO CUREMATE</h2>
            <p>Empowering Healthcare with Seamless Access to Doctors, Appointments, Prescriptions All in One Place.</p>
          </div>
          {/* End Welcome */}

          <div className="content row gy-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>Why Choose CureMate?</h3>
                <p>
                Choose CureMate for seamless healthcare access, certified doctors, hassle-free appointments,
                emergency services, rare medicine ordering, and Al-powered pill verification all in one secure and user-friendly platform. Providing fast, secure, and reliable healthcare with certified doctors, prescriptions, and emergency services
                </p>
                <div className="text-center">
                  <a href="#about" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* End Why Box */}

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="d-flex flex-column justify-content-center">
                <div className="row gy-4">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Report History</h4>
                      <p>Report History keeps track of past Report History keeps track of past medical reports, ensuring easy access, secure storage, and quick immediate
                      retrieval of medical reports. ensuring easy access, secure storage, and quick retrieval.</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                      <i className="bi bi-gem"></i>
                      <h4>Doctor Connect</h4>
                      <p>Connects you directly to your trusted doctor for consultations, medical advice, prescriptions, personalized healthcare services, follow-up
                      anytime, anywhere, ensuring comprehensive health management</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                      <i className="bi bi-inboxes"></i>
                      <h4>Medical Care</h4>
                      <p>Provides comprehensive medical care, offering doctor consultations, prescriptions, health monitoring, follow-up care, emergency services, and personalized treatment.
                      Allows alternative to the given medicines as suggested by the customer.</p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </section>
      {/* /Hero Section */}
    </main>
  );
};

export default HeroSection;
