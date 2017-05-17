import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  deleteProject(id){
    console.log("Projectid ="+id);
    this.props.onDelete(id);
  }

  render() {
    // console.log(this.props);
    let projectItems;

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
  
    return (
      <div className="Gio Project">
        <h3>Latest Project:</h3>
        {projectItems}
      </div>
    );
  }
}

export default Project;
