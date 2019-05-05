import React, { Component } from "react";
import Jobs from "./Job";

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ["#9735C7", "#BE6B7F", "#4C35A8"];

    return (
      <div className="card__container">
        <div className="card__content">
          <h1>Experience</h1>
          <div className="separation" />
          {work.map((key, index) => {
            return (
              <Jobs
                key={index}
                details={work[index]}
                colors={bgColors[index]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Card;
