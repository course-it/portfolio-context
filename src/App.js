import React from "react";
import Navbar from "./components/Navbar";
import MainData from "./components/MainData";
import Projects from "./components/Projects";
import "./App.css";
import { ProjectProvider } from "./contexts/ProjectContext";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repos: []
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/course-it");
    const dataJson = await data.json();

    const repos = await fetch("https://api.github.com/users/course-it/repos");
    const reposJson = await repos.json();

    this.setState({
      data: dataJson,
      repos: reposJson
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.data;
    const { repos } = this.state;
    return (
      <div className="App">
        <Navbar name={name ? name : ""} />
        <MainData bio={bio ? bio : ""} img={avatar_url ? avatar_url : ""} />
        <ProjectProvider value={repos}>
          <Projects />
        </ProjectProvider>
      </div>
    );
  }
}

export default App;
