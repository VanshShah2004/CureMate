import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is CureMate?',
      answer:
        'CureMate is an innovative platform that bridges the gap between patients and doctors. It uses patient data, including medical reports and databases, to provide personalized recommendations and help you find the right doctor based on your health needs.',
    },
    {
      question: 'How can I book an appointment with a doctor on CureMate?',
      answer:
        'You can easily book an appointment with a doctor through the CureMate platform by browsing through doctor profiles and selecting a suitable time slot. The system also provides recommendations based on your medical records for the best fit.',
    },
    {
      question: 'What medical specialties are available on CureMate?',
      answer:
        'CureMate offers access to a wide range of medical specialties, including but not limited to cardiology, neurology, orthopedics, pediatrics, dermatology, and general medicine, all based on your specific health requirements and recommendations.',
    },
    {
      question: 'Is my health information safe on CureMate?',
      answer:
        'Yes, CureMate allows you to upload and access your medical records securely on the platform. This data is used to provide personalized doctor recommendations and keep track of your health history for better care.',
    },
    {
      question: 'Is my health information safe on CureMate?',
      answer:
        'Absolutely. CureMate ensures the security and confidentiality of your health data by implementing strong encryption methods and following best practices for data protection, complying with healthcare regulations to maintain privacy.',
    },
    {
      question: 'Do I need insurance to use CureMate?',
      answer:
        'No, you do not need insurance to use CureMate. The platform offers its services to everyone, and although insurance options may be available for certain services, it is not a requirement to book doctor appointments or use the platform.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p></p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  {activeIndex === index && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <i className={`faq-toggle bi bi-chevron-${activeIndex === index ? 'down' : 'right'}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
