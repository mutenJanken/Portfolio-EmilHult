import React from "react";
import ProfilePicture from "/src/assets/images/me.jpeg";

function Aboutme() {
  return (
    <>
      <div className="card-container">
        <div className="card-under">UNDER</div>
        <section>
          <div className="profile-picture-wrapper">
            <img className="profile-picture" src={ProfilePicture} alt="Profile picture" />
          </div>
          <p className="aboutme-description-wrapper">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloremque. Repellendus
            consequatur beatae eius illo, molestiae unde quos libero cumque obcaecati corrupti ad in deleniti
            tempore recusandae animi nobis ea!
          </p>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
