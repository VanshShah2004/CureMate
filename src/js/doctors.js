import React from 'react';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Barney Stinson',
      role: 'Cardiologist',
      description: 'Cardiologists diagnose, treat, manage heart diseases, perform tests, and interventions.',
      imgSrc: 'assets/img/doctors/doctors-1.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Harley Quinn',
      role: 'Anesthesiologist',
      description: 'Anaesthesiologists manage anesthesia, ensure patient safety, monitor vital signs, and assist surgeries.',
      imgSrc: 'assets/img/doctors/doctors-2.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Hermione Granger',
      role: 'Pulmonogist',
      description: 'Pulmonologists diagnose and treat lung diseases, breathing disorders, and respiratory infections.',
      imgSrc: 'assets/img/doctors/doctors-3.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Joey Tribbiani',
      role: 'Nuerologist',
      description: 'Neurologists specialize in diagnosing and treating disorders of the nervous system.',
      imgSrc: 'assets/img/doctors/doctors-4.jpg',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Doctors Recommendations</h2>
        <p></p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {doctors.map((doctor, index) => (
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`} key={index}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img src={doctor.imgSrc} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>{doctor.name}</h4>
                  <span>{doctor.role}</span>
                  <p>{doctor.description}</p>
                  <div className="social">
                    <a href={doctor.socialLinks.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={doctor.socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={doctor.socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={doctor.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
