import React, { Component } from "react";
import "../style/Hero.scss";
import reactLogo from "../pictures/icons/logo.svg";
import { Col } from "reactstrap";

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;
    return (
      <Col lg="4" className="hero px-5">
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
        <div className="hero__subheader" />

        <div className="hero__summary">
          <p>{basics.summary}</p>
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
