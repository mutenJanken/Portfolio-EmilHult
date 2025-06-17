import React from "react";
import ProfilePicture from "/src/assets/images/me.jpeg";

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
              <h2 className="greeting-text">Hello, I'm</h2>
              <h1 className="greeting-text-h1">Emil Hult</h1>
              <p className="aboutme-description-wrapper">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloremque. Repellendus
                consequatur beatae eius illo, molestiae unde quos libero cumque obcaecati corrupti ad in
                deleniti tempore recusandae animi nobis ea!
              </p>
              <div className="intrest-horizontal">
                <div className="intrest">Developer</div>
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
