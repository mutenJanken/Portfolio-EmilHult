import React from "react";
import AlphaProjectImage from "/src/assets/images/alpha-1-1.png";
import MovieBookingProjectImage from "/src/assets/images/movie-booking-1-1-image.png";
import BookingMicroserviceImage from "/src/assets/images/booking-service-provider-1-1-image.png";
import EmailMicroserviceImage from "/src/assets/images/email-service-provider-1-1-image.png";

function Portfolio() {
  return (
    <div className="card-container">
      <div className="card-under-one">UNDER1</div>
      <div className="card-under-two">UNDER2</div>
      <section>
        <div className="portfolio-container">
          <h2 className="section-header">My Portfolio</h2>
          <div className="portfolio-wrapper">
            {/* ALPHA PORTAL  */}
            <a className="http-link" href="https://github.com/mutenJanken/alpha_project">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Alpha Portal</h2>
                  <p className="project-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aliquam!
                  </p>
                </div>
                <div className="project-image-wrapper">
                  <img className="project-image" src={AlphaProjectImage} alt="Alpha Project Image" />
                </div>
              </div>
            </a>

            {/* BOOKING MICROSERVICE */}
            <a className="http-link" href="https://github.com/mutenJanken/BookingServiceProvider">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Booking Microservice</h2>
                  <p className="project-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, sunt?
                  </p>
                </div>
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={BookingMicroserviceImage}
                    alt="Movie booking Project Image"
                  />
                </div>
              </div>
            </a>

            {/* EMAIL MICROSERVICE */}
            <a className="http-link" href="https://github.com/mutenJanken/EmailServiceProvider">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Email Microservice</h2>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae enim hic.
                  </p>
                </div>
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={EmailMicroserviceImage}
                    alt="Movie booking Project Image"
                  />
                </div>
              </div>
            </a>

            {/* MOVIE BOOKING  */}
            <a className="http-link" href="https://github.com/mutenJanken/movie-theater">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Movie theater</h2>
                  <p className="project-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi maxime quisquam!
                  </p>
                </div>
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={MovieBookingProjectImage}
                    alt="Movie booking Project Image"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
