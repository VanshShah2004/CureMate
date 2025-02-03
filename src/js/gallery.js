import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {[
            'gallery-1.jpg',
            'gallery-2.jpg',
            'gallery-3.jpg',
            'gallery-4.jpg',
            'gallery-5.jpg',
            'gallery-6.jpg',
            'gallery-7.jpg',
            'gallery-8.jpg',
          ].map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href={`assets/img/gallery/${image}`} className="glightbox" data-gallery="images-gallery">
                  <img
                    src={`assets/img/gallery/${image}`}
                    alt={`Gallery Image ${index + 1}`}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
