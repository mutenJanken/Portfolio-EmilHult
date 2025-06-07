import React from "react";
import CsharpLogo from "/src/assets/images/csharplogo.png";
import ReactLogo from "/src/assets/images/reactlogo.png";
import DBLogo from "/src/assets/images/dblogo.png";
import CloudLogo from "/src/assets/images/cloudlogo.png";

function Skills() {
  return (
    // SKILLS
    <div className="card-container">
      <div className="card-under-one">UNDER1</div>
      <div className="card-under-two">UNDER2</div>
      <section>
        {/* BACKEND */}
        <div className="skill-type-wrapper">
          <h5 className="skill-top-h5">Backend</h5>
        </div>
        <div className="skill-wrapper">
          <div className="logo-wrapper">
            <img className="logo" src={CsharpLogo} alt="csharp logo" />
          </div>
          <p className="skill-description">
            C#, .NET, REST APIs (ASP.NET Web API), gRPC, Monolithic & Microservices architecture
          </p>
        </div>

        {/* FRONTEND*/}
        <div className="skill-type-wrapper">
          <h5 className="skill-h5">Frontend</h5>
        </div>
        <div className="skill-wrapper">
          <div className="logo-wrapper">
            <img className="logo" src={ReactLogo} alt="html logo" />
          </div>
          <p className="skill-description">React, ASP.NET MVC, Javascript, Html, CSS/SCSS</p>
        </div>

        {/* DATABASE */}
        <div className="skill-type-wrapper">
          <h5 className="skill-h5">Database</h5>
        </div>
        <div className="skill-wrapper">
          <div className="logo-wrapper">
            <img className="logo" src={DBLogo} alt="database logo" />
          </div>
          <p className="skill-description">SQL Server, T-SQL, MongoDB, Entity Framework Core, ADO.NET</p>
        </div>

        {/* CLOUD */}
        <div className="skill-type-wrapper">
          <h5 className="skill-h5">Cloud</h5>
        </div>
        <div className="skill-wrapper bottom">
          <div className="logo-wrapper">
            <img className="logo" src={CloudLogo} alt="cloud logo" />
          </div>
          <p className="skill-description">
            Cloud app deployment using Azure Web Apps, Azure Databases, Azure Communication Services, and
            related Azure services.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Skills;
