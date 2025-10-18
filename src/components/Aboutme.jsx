import ProfilePicture from "/assets/images/profile-picture-b&w3.jpg";

function Aboutme() {
  return (
    <>
      <div className="card-container">
        <div className="card-under-one">UNDER1</div>
        <div className="card-under-two">UNDER2</div>
        <section>
          <div className="about-me-wrapper">
            <div className="profile-picture-wrapper">
              <img className="profile-picture" src={ProfilePicture} alt="Profile picture" />
            </div>
            <div className="about-me-vertical">
              <div className="greeting-wrapper">
                <div className="greeting-text">
                  <strong className="greeting-strong"> Hi There,</strong>I'm
                </div>
                <div className="greeting-text-name">Emil.</div>
              </div>
              <p className="aboutme-description-wrapper">
                Currently studying .NET Fullstack development and I'm just getting started on my journey as a
                developer. I enjoy working with both backend and frontend, and I love finding that sweet spot
                where logic meets design. I'm always looking to learn, explore and improve, both as a
                programmer and as a problem-solver.
              </p>
              <div className="intrest-horizontal">
                <div className="intrest">Student</div>
                <div className="intrest">Bookworm</div>
                <div className="intrest">Guitar</div>
                <div className="intrest">Exercise</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
