import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/Hero.scss";

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;

    return (
      <div className="hero">
        <div className="nameBg border">
          <h1 className="hero__header">{basics.name}</h1>
        </div>
        <h4 className="hero__subheader">
          {basics.location.city}{" "}
          <span role="img" aria-label="Sun">
            ☀️
          </span>
        </h4>

        <p>{basics.summary}</p>
        {basics.pdf ? (
          <p className="hero__text">
            <a href={basics.pdf}>PDF version</a> of the resume.
          </p>
        ) : (
          ""
        )}
        <p className="hero__text">
          <a
            href={`mailto:${basics.email}?subject=Resume%20Inquiry`}
            style={{ textDecoration: "none" }}
          >
            e-mail
          </a>
        </p>

        <p className="hero__text">
          <a
            href="https://linkedin.com/in/iamskok"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {basics.website}
          </a>
        </p>

        <div className="hero__link-container">
          <a
            href="https://github.com/iamskok/react-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__link"
          >
            made with
            <img src={logo} className="hero__logo" alt="Made With React Logo" />
          </a>
        </div>

        <span role="img" aria-label="Arrow down" className="hero__arrow">
          ⬇️
        </span>
      </div>
    );
  }
}

export default Hero;
