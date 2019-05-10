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
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    const activeColor = "#f7f7f7";
    return (
      <Router>
        <div className="app">
          <Hero resumeObj={resume} />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Experience resumeObj={resume} />}
            />
            <Route
              exact
              path={"/Education"}
              render={() => <Education education={resume.education} />}
            />
            <Route
              exact
              path={"/Skills"}
              render={() => <SkillsList resumeObj={resume} />}
            />
            <Route
              exact
              path={"/Portfolio"}
              render={() => <Portfolio portfolio={resume.portfolio} />}
            />
            <Route
              exact
              path={"/Contact"}
              render={() => <Contact info={resume.basics.social} />}
            />
          </Switch>

          <nav className="nav__container">
            <NavLink
              exact
              to="/"
              className="nav__btn"
              activeStyle={{
                color: activeColor,
                borderColor: activeColor
              }}
            >
              Expérience
            </NavLink>
            <NavLink
              to={"/Education"}
              className="nav__btn"
              activeStyle={{
                color: activeColor,
                borderColor: activeColor
              }}
            >
              Formation
            </NavLink>
            <NavLink
              to={"/Skills"}
              className="nav__btn"
              activeStyle={{
                color: activeColor,
                borderColor: activeColor
              }}
            >
              Compétences
            </NavLink>
            <NavLink
              to={"/Portfolio"}
              className="nav__btn"
              activeStyle={{
                color: activeColor,
                borderColor: activeColor
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to={"/Contact"}
              className="nav__btn"
              activeStyle={{
                color: activeColor,
                borderColor: activeColor
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
