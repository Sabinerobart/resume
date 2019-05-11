import React from "react";
import "../style/Contact.scss";
import "../App.scss";
import { Col } from "reactstrap";

class Contact extends React.Component {
  render() {
    const info = this.props.info;
    return (
      <Col lg="7" className="contact__container">
        <h1 className="title">
          Contact <span>+</span>
        </h1>
        <div className="separation" />
        <div className="contact__modal">
          <Col xs="7" className="contact__default-box" />
          <Col xs="12" md="5" className="contact__box">
            <a href={`mailto:${info.email}?subject=About your Resume`}>
              <i className="far fa-envelope" />
              <p>{info.email}</p>
            </a>
            <a href="/Contact">
              <i className="fas fa-phone" />
              <p>{info.phone}</p>
            </a>
            <a href={info.linkedin}>
              <i className="fab fa-linkedin-in" />
              <p>{info.linkedin}</p>
            </a>
            <a href={info.github}>
              <i className="fab fa-github" />
              <p>{info.github}</p>
            </a>
            <a href={info.twitter}>
              <i className="fab fa-twitter" />
              <p>{info.twitter}</p>
            </a>
          </Col>
        </div>
      </Col>
    );
  }
}

export default Contact;
