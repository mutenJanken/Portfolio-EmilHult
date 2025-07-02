import AlphaProjectImage from "/src/assets/images/alpha-1-1.png";
import MovieBookingProjectImage from "/src/assets/images/movie-booking-1-1-image.png";
import MovieBookingProjectTallImage from "/src/assets/images/movie-booking-4-3.png";
import BookingMicroserviceImage from "/src/assets/images/booking-service-provider-1-1-image.png";
import EmailMicroserviceImage from "/src/assets/images/email-service-provider-1-1-image.png";

function Portfolio() {
  return (
    <div className="card-container">
      <div className="card-under-one">UNDER1</div>
      <div className="card-under-two">UNDER2</div>
      <section>
        <div className="portfolio-container">
          <div className="section-header-center">
            <h2 className="section-header">My Portfolio</h2>
          </div>
          <div className="portfolio-wrapper">
            {/* ALPHA PORTAL  */}
            {/* <a className="http-link" href="https://github.com/mutenJanken/alpha_project">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Alpha Portal</h2>
                  <p className="project-description">Backend - ASP.NET WebAPI</p>
                  <p className="project-description">Frontend - React, Javascript, Html, CSS/SCSS.</p>
                </div>
                <div className="project-image-wrapper">
                  <img className="project-image" src={AlphaProjectImage} alt="Alpha Project Image" />
                </div>
              </div>
            </a> */}

            {/* BOOKING MICROSERVICE */}
            {/* <a className="http-link" href="https://github.com/mutenJanken/BookingServiceProvider">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Booking Microservice</h2>
                  <p className="project-description">Microservice for an Event-site using ASP.NET gRPC.</p>
                </div>
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={BookingMicroserviceImage}
                    alt="Movie booking Project Image"
                  />
                </div>
              </div>
            </a> */}

            {/* EMAIL MICROSERVICE */}
            {/* <a className="http-link" href="https://github.com/mutenJanken/EmailServiceProvider">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Email Microservice</h2>
                  <p className="project-description">
                    Microservice for an Event-site using ASP.NET gRPC and Azure Communication Service for
                    emails.
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
            </a> */}

            {/* MOVIE BOOKING  */}
            {/* <a className="http-link" href="https://github.com/mutenJanken/movie-theater">
              <div className="project-wrapper">
                <div className="project-description-wrapper">
                  <h2 className="project-header">Movie theater</h2>
                  <p className="project-description">Using React, Javascript and a simple JSON-Server.</p>
                </div>
                <div className="project-image-wrapper">
                  <img
                    className="project-image"
                    src={MovieBookingProjectImage}
                    alt="Movie booking Project Image"
                  />
                </div>
              </div>
            </a> */}

            {/* ALPHA PORTAL TEST */}
            <a className="http-link" href="https://github.com/mutenJanken/alpha_project">
              <div className="project-wrapper-test">
                <div className="project-desc-image-horizontal">
                  <div className="project-description-wrapper-test">
                    <h2 className="project-header">Alpha Portal</h2>
                    <p className="project-description">ASP.NET Web-API, React, Javascript, Html, CSS/SCSS.</p>
                  </div>
                  <div className="project-image-wrapper">
                    <img className="project-image-test" src={AlphaProjectImage} alt="Alpha Project Image" />
                  </div>
                </div>
                <div className="project-desc-vertical">
                  <div className="project-desc-horizontal">
                    <div className="description">Backend</div>
                    <div className="description">Frontend</div>
                    <div className="description">ASP.NET Web-API</div>
                    <div className="description">React</div>
                    <div className="description">Database</div>
                    <div className="description">Javascript</div>
                    <div className="description">Html</div>
                    <div className="description">CSS/SCSS</div>
                  </div>
                  {/* <div className="project-desc-horizontal">
                  </div>
                  <div className="project-desc-horizontal">
                  </div> */}
                </div>
              </div>
            </a>

            {/* BOOKING MICROSERVICE TEST*/}
            <a className="http-link" href="https://github.com/mutenJanken/BookingServiceProvider">
              <div className="project-wrapper-test">
                <div className="project-desc-image-horizontal">
                  <div className="project-description-wrapper-test">
                    <h2 className="project-header">Booking Microservice</h2>
                    <p className="project-description">Microservice for an Event-site using ASP.NET gRPC.</p>
                  </div>
                  <div className="project-image-wrapper">
                    <img
                      className="project-image-test"
                      src={BookingMicroserviceImage}
                      alt="Movie booking Project Image"
                    />
                  </div>
                </div>
                <div className="project-desc-vertical">
                  <div className="project-desc-horizontal">
                    <div className="description">Backend</div>
                    <div className="description">Azure Database</div>
                    <div className="description">ASP.NET</div>
                    <div className="description">gRPC</div>
                  </div>
                  {/* <div className="project-desc-horizontal">
                  </div> */}
                </div>
              </div>
            </a>

            {/* EMAIL MICROSERVICE TEST */}
            <a className="http-link" href="https://github.com/mutenJanken/EmailServiceProvider">
              <div className="project-wrapper-test">
                <div className="project-desc-image-horizontal">
                  <div className="project-description-wrapper-test">
                    <h2 className="project-header">Email Microservice</h2>
                    <p className="project-description">
                      Microservice for an Event-site using ASP.NET gRPC and Azure Communication Service for
                      emails.
                    </p>
                  </div>
                  <div className="project-image-wrapper">
                    <img
                      className="project-image-test"
                      src={EmailMicroserviceImage}
                      alt="Movie booking Project Image"
                    />
                  </div>
                </div>
                <div className="project-desc-vertical">
                  <div className="project-desc-horizontal">
                    <div className="description">Backend</div>
                    <div className="description">ASP.NET</div>
                    <div className="description">gRPC</div>
                    <div className="description">Azure Communication Service</div>
                  </div>             
                  {/* <div className="project-desc-horizontal">
                  </div> */}
                </div>
              </div>
            </a>

            {/* MOVIE BOOKING  TEST*/}
            <a className="http-link" href="https://github.com/mutenJanken/movie-theater">
              <div className="project-wrapper-test">
                <div className="project-desc-image-horizontal">
                  <div className="project-description-wrapper-test">
                    <h2 className="project-header">Movie theater</h2>
                    <p className="project-description">Using React, Javascript and a simple JSON-Server.</p>
                  </div>
                  <div className="project-image-wrapper">
                    <img
                      className="project-image-test"
                      src={MovieBookingProjectImage}
                      alt="Movie booking Project Image"
                    />
                  </div>
                </div>
                <div className="project-desc-vertical">
                  <div className="project-desc-horizontal">
                    <div className="description">Frontend</div>
                    <div className="description">Database</div>
                    <div className="description">JSON-Server</div>
                    <div className="description">React</div>
                    <div className="description">Javascript</div>
                  </div>
                  {/* <div className="project-desc-horizontal">
                  </div> */}
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
