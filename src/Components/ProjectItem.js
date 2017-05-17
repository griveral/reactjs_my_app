import React, { Component } from 'react';

class ProjectItem extends Component {
	deleteProject(id){
		console.log('ProjectItemid = '+ id);
		this.props.onDelete(id);
	}

  render() {
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>delete</a>
      </li>
    );
  }
}

export default ProjectItem;
