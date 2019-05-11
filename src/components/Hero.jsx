import React, { Component } from "react";
import "../style/Hero.scss";
import reactLogo from "../pictures/icons/logo.svg";
import { Col } from "reactstrap";

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;
    return (
      <Col xs="12" lg="4" className="hero">
        <div className="business-card">
          <div className="flip hvr-outline-in">
            <div className="front d-flex align-items-center">
              <Col xs="4">
                <img
                  src={require("../pictures/PhotoCV-b&w.jpeg")}
                  height="100vh"
                  alt="profile"
                />
              </Col>
              <Col xs="8">
                <h1>{basics.firstName}</h1>
                <h1>{basics.lastName}</h1>
                <div className="rotate">
                  <i className="fas fa-redo-alt" />
                </div>
              </Col>
            </div>

            <div className="back">
              <h2>Web Developer</h2>
              <h3>Front-end | Back-end</h3>
              <div className="line" />
              <div className="social">
                <a href={basics.social.linkedin}>
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href={basics.social.github}>
                  <i className="fab fa-github" />
                </a>
                <a href={basics.social.twitter}>
                  <i className="fab fa-twitter" />
                </a>
                <a href={basics.social.codepen}>
                  <i className="fab fa-codepen" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__modal">
          <div className="hero__summary">
            <p>
              J'ai décidé de me reconvertir afin de m'orienter vers un
              métier-passion : formée au développement web front-end && back-end
              à la
              <a
                href="https://wildcodeschool.fr/"
                className="hvr-underline-from-left"
                target="_blank"
              >
                Wild Code School
              </a>
              , je suis disponible à partir de août || septembre 2019 pour un
              stage de 4 à 6 mois.
            </p>
            <h4>
              {basics.specialties.map((techno, i) => {
                return (
                  <span key={i} className="mr-3 font-italic">
                    #{techno}
                  </span>
                );
              })}
            </h4>
          </div>
          {basics.pdf ? (
            <a
              href={basics.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <div>
                <img
                  src={require("../pictures/icons/pdf.png")}
                  height="20px"
                  alt="pdf"
                />
                <span>Version PDF</span>
              </div>
            </a>
          ) : (
            ""
          )}
          <a
            href={basics.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            <div>
              <img
                src={require("../pictures/icons/linkedin.png")}
                height="20px"
                alt="linkedin"
              />
              <span>Voir mon profil Linkedin</span>
            </div>
          </a>
          <a
            href={`mailto:${basics.social.email}?subject=Resume`}
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            <div>
              <img
                src={require("../pictures/icons/mail.png")}
                height="20px"
                alt="email"
              />
              <span>Me contacter par e-mail</span>
            </div>
          </a>

          <p className="made-with">
            Powered by
            <img
              src={require("../pictures/icons/heart.png")}
              alt="love"
              className="hero__heart"
            />
            and
            <img src={reactLogo} className="hero__react-logo" alt="react" />
          </p>
        </div>

        <span role="img" aria-label="Arrow down" className="hero__arrow">
          <img
            src={require("../pictures/icons/arrow-down.png")}
            alt="arrow down"
            height="25px"
          />
        </span>
      </Col>
    );
  }
}

export default Hero;
