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
    const idees = this.props.idees;

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
                <div className="col-md-10 mx-auto px-0 py-4 portfolio-descr">
                  Les 2 premiers projets ci-dessous on été réalisés dans le
                  cadre de ma formation développeur web suivie à la
                  <a
                    href="https://wildcodeschool.fr/"
                    className="hvr-underline-from-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wild Code School
                  </a>
                  de Lille. Ces projets ont été réalisés en équipe, sur une
                  période de 4 semaines maximum.
                </div>
                <div className="col-md-10 mx-auto px-0 py-4 portfolio-descr">
                  Le 3ème projet fait référence à ce même site personnel. C'est
                  un projet personnel, réalisé en quelques jours.
                </div>
                {projects.map((project, i) => {
                  const img = [
                    require("../pictures/Project2.jpg"),
                    require("../pictures/Project1.jpg"),
                    require("../pictures/this-resume.jpg")
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
                <Col md="10" className="mx-auto px-0 py-4 portfolio-descr">
                  En 2018, j'ai participé au challenge quotidien
                  <a
                    href="https://100dayscss.com/"
                    className="hvr-underline-from-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    100 days css.
                  </a>
                  Chaque jour pendant 100 jours, je me suis exercée à
                  différentes techniques d'intégration. J'ai beaucoup pratiqué
                  les technologies telles que :
                  <ul>
                    <li>Html 5</li>
                    <li>Css/Sass</li>
                    <li>Bootstrap</li>
                    <li>Animations (CSS 3)</li>
                  </ul>
                  Réalisé avant de commencer ma formation de développeur, ce
                  challenge m'a permis d'acquérir de solides bases, et de
                  confirmer mon goût pour la programmation informatique. Voici
                  quelques exemples des mini-projets que j'ai réalisés.
                  <br />
                  Pour découvrir les autres projets et constater ma progression
                  dans ces langages, rendez-vous sur
                  <a
                    href={idees.codepen}
                    className="hvr-underline-from-left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codepen.
                  </a>
                </Col>
                {pens.map((pen, i) => {
                  const img = [
                    require("../pictures/folding-profile-gallery.jpg"),
                    require("../pictures//sliding-notifications-card.jpg"),
                    require("../pictures//email-icon-animation.jpg")
                  ];
                  const penNumber = `pen ${i}`;
                  return (
                    <a
                      key={i}
                      href={pen.penHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-12 col-md-10 p-0 my-4 mx-auto"
                    >
                      <div>
                        <img
                          className="portfolio-picture"
                          src={img[i]}
                          alt={penNumber}
                        />
                        <div>
                          <img
                            className="plus-sign"
                            src={require("../pictures/icons/plus.png")}
                            alt="plus sign"
                            height="40px"
                          />
                          <h3>{pen.projectName}</h3>
                          <p>{pen.descr}</p>
                        </div>
                      </div>
                    </a>
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
