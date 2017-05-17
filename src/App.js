import React, { Component } from 'react';
import uuid from 'uuid';
import Project from './Components/Project';
import AddProject from './Components/AddProject';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      project: []
    }
  }

  componentWillMount(){
    this.setState( {project: [
        {
          id: uuid.v4(),
          title: 'Business website',
          category: 'Web design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile application'
        },
        {
          id: uuid.v4(),
          title: 'E-commerce Shopping cart',
          category: 'Web development'
        },
      ]

    });
  }

  handleAddProject(project){
    // console.log(project);
    let projects = this.state.project;
    projects.push(project);
    this.setState({project: projects});
  }

  deleteProject(id){
    console.log(id);
    let projects = this.state.project;
    let index = projects.findIndex(x => x.id === id);

    projects.splice(index, 1);
    this.setState({project: projects});
  }

  // $.ajax({
  //   url: 'http://google.com',
  //   dataType: 'json',
  //   cache: false,
  //   success: function(data){

  //   }.bind(this),
  //   error: function(xhr, status, err){
  //     console.log(err);
  //   }
  // });

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Project onDelete={this.deleteProject.bind(this)} projects={this.state.project}/>
      </div>
    );
  }
}

export default App;
