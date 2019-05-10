import React, { Component } from "react";
import Job from "./Job";
import "../style/Experience.scss";
import { Col } from "reactstrap";
import "../App.scss";

class Experience extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ["#432fd6", "#a52cd7", "#6d92e7", "#c26de7", "#b30bac"];

    return (
      <Col lg="7" className="card__container">
        <div className="card__content">
          <h1 className="title">
            Expérience <span>+</span>
          </h1>
          <div className="separation" />
          {work.map((key, index) => {
            return (
              <Job key={index} details={work[index]} colors={bgColors[index]} />
            );
          })}
        </div>
      </Col>
    );
  }
}

export default Experience;
