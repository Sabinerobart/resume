import React from "react";
import "../style/Education.scss";
import "../App.scss";
// import Footer from "./Footer";

import {
  Card,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
  Col
} from "reactstrap";

class Education extends React.Component {
  render() {
    const educ = this.props.education;
    const bgColors = [
      "#432fd6",
      "#a52cd7",
      "#6d92e7",
      "#c26de7",
      "#b30bac",
      "#9A0FE0"
    ];

    return (
      <Col lg="7" className="education__container">
        <h1 className="title">
          Formation <span>+</span>
        </h1>
        <div className="separation" />
        <CardGroup className="education__modal flex-nowrap">
          {educ.map((degree, i) => {
            return (
              <Col
                xs="11"
                sm="8"
                md="6"
                xl="5"
                className="education__card p-0 my-4 mx-auto mx-md-4"
              >
                <CardTitle>
                  <h4
                    style={{
                      background: "#201c29",
                      borderLeft: `10px solid ${bgColors[i]}`,
                      marginLeft: "2rem",
                      marginTop: "1rem"
                    }}
                  >
                    <div>{degree.formation}</div>
                    <div>{degree.field}</div>
                  </h4>
                </CardTitle>
                <CardSubtitle>
                  {degree.city} ~ {degree.endDate}
                </CardSubtitle>
                <CardBody className="education__text">
                  <div className="education__subheader">
                    <h5>
                      {degree.studyType} {degree.institution}
                    </h5>
                    <h6 className="text-muted">{degree.options}</h6>
                  </div>
                </CardBody>
              </Col>
            );
          })}
        </CardGroup>
        {/* <Footer /> */}
      </Col>
    );
  }
}

export default Education;
