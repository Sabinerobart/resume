import React, { Component } from "react";
import Skill from "./Skill";
import "../style/SkillsList.scss";
import "../App.scss";
import { Col } from "reactstrap";

class SkillsList extends Component {
  render() {
    const { skills } = this.props.resumeObj;

    return (
      <Col lg="7" className="skills-list__container">
        <h1 className="title skills-list__header">
          Compétences <span>+</span>
        </h1>
        <div className="separation" />
        <div className="skills-list__modal row text-center text-md-left">
          <Col xs="12" md="6" className="skills-list my-4">
            <h3>Compétences techniques</h3>
            {skills.keywords.map((key, i) => (
              <Skill key={i} details={skills.keywords[i]} index={i} />
            ))}
          </Col>
          <Col xs="12" md="6" className="skills-list my-4">
            <h3>Je suis aussi</h3>
            {skills.softSkills.map((key, i) => (
              <Skill key={i} details={skills.softSkills[i]} index={i} />
            ))}
          </Col>
        </div>
      </Col>
    );
  }
}

export default SkillsList;
