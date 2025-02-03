import React, { useState } from 'react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    // For now, just show success message
    setFormStatus('Your appointment request has been sent successfully. Thank you!');
  };

  return (
    <section id="appointment" className="appointment section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Appointment</h2>
        
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="datetime-local"
                name="date"
                className="form-control datepicker"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="doctor"
                id="doctor"
                className="form-select"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">{formStatus}</div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
