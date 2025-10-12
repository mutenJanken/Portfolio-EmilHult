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
        <div className="skills-vertical">
            {/* <div className="section-header-center">
              <h2 className="section-header">My skillset</h2>
            </div> */}
          <div className="skill-type-container">

            {/* BACKEND */}
            <div className="skill-type-wrapper top-left">
              <div className="skill-type top-left">
                <h5 className="skill-h5">
                  Backend<div className="syntax-sign">{"{ }"}</div>
                </h5>
              </div>
              <div className="skill-wrapper-new top-left">
                <div className="logo-wrapper top-left">
                  <img className="logo" src={CsharpLogo} alt="csharp logo" />
                </div>
                <div className="small-skills-vertical top-left">
                  <div className="skill-gap-wrapper">
                    <div className="skill">REST API</div>
                    <div className="skill">gRPC</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">C#</div>
                    <div className="skill">.NET</div>
                    <div className="skill">ASP.NET</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Monolithic architecture</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Microservice Architecture</div>
                  </div>
                </div>
              </div>
            </div>


            {/* FRONTEND */}
            <div className="skill-type-wrapper top-right">
              <div className="skill-type top-right">
                <h5 className="skill-h5">
                  Frontend<div className="syntax-sign">{"</>"}</div>
                </h5>
              </div>
              <div className="skill-wrapper">
                <div className="logo-wrapper">
                  <img className="logo" src={ReactLogo} alt="html logo" />
                </div>
                <div className="small-skills-vertical">
                  <div className="skill-gap-wrapper">
                    <div className="skill">React</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">ASP.NET MVC</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Javascript</div>
                    <div className="skill">Html</div>
                    <div className="skill">Css/Scss</div>
                  </div>
                </div>
              </div>
            </div>

            {/* DATABASE */}
            <div className="skill-type-wrapper bottom-left">
              <div className="skill-type bottom-left">
                <h5 className="skill-h5">
                  Database<div className="syntax-sign">{"[ ]"}</div>
                </h5>
              </div>
              <div className="skill-wrapper bottom-left">
                <div className="logo-wrapper bottom-left">
                  <img className="logo" src={DBLogo} alt="database logo" />
                </div>
                <div className="small-skills-vertical bottom-left">
                  <div className="skill-gap-wrapper">
                    <div className="skill">SQL Server</div>
                    <div className="skill">T-SQL</div>
                    <div className="skill">MongoDB</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Entity Framework Core</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">ADO.NET</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CLOUD */}
            <div className="skill-type-wrapper bottom-right">
              <div className="skill-type bottom-right">
                <h5 className="skill-h5">
                  Cloud<div className="syntax-sign">{"( )"}</div>
                </h5>
              </div>
              <div className="skill-wrapper bottom">
                <div className="logo-wrapper">
                  <img className="logo" src={CloudLogo} alt="cloud logo" />
                </div>
                <div className="small-skills-vertical">
                  <div className="skill-gap-wrapper">
                    <div className="skill">Azure Communication Service</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Azure DevOps</div>
                    <div className="skill">CI / CD</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Azure Database</div>
                  </div>
                  <div className="skill-gap-wrapper">
                    <div className="skill">Azure Web App</div>
                  </div>
                  <div className="skill-gap-wrapper"></div>
                </div>
                {/* <p className="skill-description bottom">
                  Cloud app deployment using Azure Web Apps, Azure Databases, Azure Communication Services,
                  and related Azure services.
                </p> */}
              </div>
            </div>

            {/* BACKEND
            <div className="skill-type-wrapper">
              <div className="skill-type">
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
            </div>

            {/* FRONTEND*/}

            {/* <div className="skill-type-wrapper">
              <div className="skill-type">
                <h5 className="skill-h5">
                  Frontend<div className="syntax-sign">{""}</div>
                </h5>
              </div>
              <div className="skill-wrapper">
                <div className="logo-wrapper">
                  <img className="logo" src={ReactLogo} alt="html logo" />
                </div>
                <p className="skill-description">React, ASP.NET MVC, Javascript, Html, CSS/SCSS</p>
              </div>
            </div> */}

            {/* DATABASE */}
            {/* <div className="skill-type-wrapper">
              <div className="skill-type">
                <h5 className="skill-h5">Database</h5>
              </div>
              <div className="skill-wrapper">
                <div className="logo-wrapper">
                  <img className="logo" src={DBLogo} alt="database logo" />
                </div>
                <p className="skill-description">
                  SQL Server, T-SQL, MongoDB, Entity Framework Core, ADO.NET
                </p>
              </div>
            </div> */}

            {/* CLOUD 
              <div className="skill-type-wrapper">
              <div className="skill-type">
                <h5 className="skill-h5">Cloud</h5>
              </div>
              <div className="skill-wrapper bottom">
                <div className="logo-wrapper">
                  <img className="logo" src={CloudLogo} alt="cloud logo" />
                </div>
                <p className="skill-description bottom">
                  Cloud app deployment using Azure Web Apps, Azure Databases, Azure Communication Services,
                  and related Azure services.
                </p>
              </div>
            </div>  */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
