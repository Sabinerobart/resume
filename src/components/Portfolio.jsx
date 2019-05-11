import React from "react";
import "../App.scss";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "../style/Portfolio.scss";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const pens = this.props.portfolio.pens;
    const projects = this.props.portfolio.projects;

    return (
      <Col lg="7" className="portfolio__container">
        <div className="portfolio__content">
          <h1 className="title">
            Portfolio <span>+</span>
          </h1>
          <div className="separation" />
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Projets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Idées
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                {projects.map((project, i) => {
                  const img = [
                    require("../pictures/Project2.jpg"),
                    require("../pictures/Project1.jpg")
                  ];
                  const projectNumber = `project ${i}`;
                  return (
                    <a
                      key={i}
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-12 col-md-10 p-0 my-4 mx-auto"
                    >
                      <div className="picture-container">
                        <img
                          className="portfolio-picture"
                          src={img[i]}
                          alt={projectNumber}
                        />
                        <div className="overlay">
                          <img
                            src={require("../pictures/icons/plus.png")}
                            alt="plus sign"
                            height="40px"
                          />
                          <h3>{project.projectName}</h3>
                          <p>{project.descr}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur voluptate voluptates adipisci aspernatur sequi eveniet
                  minima quasi quisquam incidunt sapiente, corporis reiciendis
                  praesentium. Assumenda fuga provident ab similique nihil
                  asperiores?
                </p>
                {pens.map((pen, i) => {
                  return (
                    <React.Fragment>
                      <p
                        className="codepen col-9"
                        data-height="496"
                        data-theme-id="dark"
                        data-default-tab="css,result"
                        data-user="_Sabine"
                        data-slug-hash={pen.dataSlugHash[i]}
                        data-preview="true"
                        style={{
                          height: "365px",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2px solid #fafafa",
                          margin: "1rem auto",
                          padding: "1rem"
                        }}
                        data-pen-title={pen.dataPenTitle}
                      >
                        <span>
                          See the Pen &nbsp;
                          <a href={pen.penHref}>{pen.dataPenTitle}</a>&nbsp; by
                          Sabine Robart (
                          <a href="https://codepen.io/_Sabine">@_Sabine</a>) on
                          <a href="https://codepen.io"> CodePen </a>.
                        </span>
                      </p>
                      <script
                        async
                        src="https://static.codepen.io/assets/embed/ei.js"
                      />
                    </React.Fragment>
                  );
                })}
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Col>
    );
  }
}
export default Portfolio;
