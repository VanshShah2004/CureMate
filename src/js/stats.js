import React from 'react';

const StatsSection = () => {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-solid fa-user-doctor"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
              <p>12</p>
              <p>Doctors</p>
            </div>
          </div>
          {/* End Stats Item */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-regular fa-hospital"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
              <p>8</p>
              <p>Reports</p>
            </div>
          </div>
          {/* End Stats Item */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-flask"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
             <p>9</p> <p>Referals</p>
            </div>
          </div>
          {/* End Stats Item */}

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-award"></i>
            <div className="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
              <p>10</p>
              <p>Awards</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
