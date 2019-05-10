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
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Snippets
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" fade={true}>
              <Row>
                {projects.map((project, i) => {
                  const img = [
                    require("../pictures/Project2.jpg"),
                    require("../pictures/Project1.jpg")
                  ];
                  return (
                    <a
                      key={i}
                      href={project.projectUrl}
                      target="_blank"
                      className="col-10 p-0 my-4 mx-auto"
                    >
                      <div className="picture-container">
                        <img
                          className="portfolio-picture"
                          src={img[i]}
                          alt="cook"
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
                        data-pen-title={pen.dataPenTitle[i]}
                      >
                        <span>
                          See the Pen &nbsp;
                          <a href={pen.penHref[i]}>{pen.dataPenTitle}</a>&nbsp;
                          by Sabine Robart (
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

                {/* {pens.map((pen, i) => {
                  return (
                    <a
                    // class="codepen"
                    // data-height="365"
                    // data-theme-id="0"
                    // data-default-tab="css,result"
                    // data-user="_Sabine"
                    // data-slug-hash={pen.dataSlugHash[i]}
                    // style={{
                    //   height: "365px",
                    //   boxSizing: "border-box",
                    //   display: "flex",
                    //   alignItems: "center",
                    //   justifyContent: "center",
                    //   border: "2px solid #fafafa",
                    //   margin: "1em 0",
                    //   padding: "1rem"
                    // }}
                    // data-pen-title={pen.dataPenTitle[i]}
                    >
                      <img src={pen.penImg} />
                      <span>
                        See the Pen
                        <a
                          href={pen.penHref[i]}
                          className="links"
                          style={{ padding: "0 .5rem" }}
                        >
                          {pen.dataPenTitle}
                        </a>
                        by Sabine Robart (
                        <a className="links" href="https://codepen.io/_Sabine">
                          @_Sabine
                        </a>
                        ) on
                        <a className="links" href="https://codepen.io">
                          CodePen
                        </a>
                        .
                      </span>
                      <script
                        async
                        src="https://static.codepen.io/assets/embed/ei.js"
                      />
                    </a>
                  );
                })} */}
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Col>
    );
  }
}
export default Portfolio;
