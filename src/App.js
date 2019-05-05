import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./App.scss";
import Hero from "./components/Hero";
import SkillsList from "./components/SkillsList";
import Card from "./components/Card";
import Education from "./components/Education";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>
        <div className="app">
          <Hero resumeObj={resume} />
          <Switch>
            <Route
              exact
              path={"/Experience"}
              render={() => <Card resumeObj={resume} />}
            />
            <Route
              exact
              path={"/Skills"}
              render={() => <SkillsList resumeObj={resume} />}
            />
            <Route
              exact
              path={"/Education"}
              render={() => <Education education={resume.education[0]} />}
            />
            <Route
              exact
              path={"/Contact"}
              render={() => <Contact info={resume.basics} />}
            />
          </Switch>

          <nav expand="sm" className="nav__container">
            <NavLink
              exact
              to="/Experience"
              className="nav__btn"
              activeStyle={{
                borderBottom: "2px solid #9735c7",
                borderTop: "2px solid transparent"
              }}
            >
              Experience
            </NavLink>
            <NavLink
              to={"/Skills"}
              className="nav__btn"
              activeStyle={{
                borderBottom: "2px solid #9735c7",
                borderTop: "2px solid transparent"
              }}
            >
              Skills
            </NavLink>
            <NavLink
              to={"/Education"}
              className="nav__btn"
              activeStyle={{
                borderBottom: "2px solid #9735c7",
                borderTop: "2px solid transparent"
              }}
            >
              Education
            </NavLink>

            <NavLink
              to={"/Contact"}
              className="nav__btn"
              activeStyle={{
                borderBottom: "2px solid #9735c7",
                borderTop: "2px solid transparent"
              }}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
