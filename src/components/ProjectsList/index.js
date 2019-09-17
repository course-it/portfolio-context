import React from "react";
import ProjectContext from "../../contexts/ProjectContext";
import Project from "../Project";
class ProjectsList extends React.Component {
  static contextType = ProjectContext;
  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.map((project, key) => {
          return <Project data={project} key={key} />;
        })}
      </div>
    );
  }
}

export default ProjectsList;
