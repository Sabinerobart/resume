import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Skill extends Component {
  render() {
    return (
      <Row className="skill-row">
        <Col xs="3" className="skill-number align-items-center">
          <p className="m-0">{this.props.index + 1}</p>
        </Col>
        <Col xs="8" className="skill d-flex align-items-center mx-auto">
          <p className="m-0">{this.props.details}</p>
        </Col>
      </Row>
    );
  }
}

export default Skill;
