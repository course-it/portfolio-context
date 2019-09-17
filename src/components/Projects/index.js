import React from "react";
import ProjectContext from "../../contexts/ProjectContext";
import ProjectsList from "../ProjectsList";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ProjectsList />
      </div>
    );
  }
}

export default Projects;
