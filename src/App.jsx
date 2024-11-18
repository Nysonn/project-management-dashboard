import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle creation of a new project
  function handleCreateProject() {
    setSelectedProject("new");
  }

  //Function to save new project
  function handleSaveProject(project) {
    setProjects([...projects, project]);
    setSelectedProject(null);
  }

  //Function to cancel project creation
  function handleCancelPoject() {
    setSelectedProject(null);
  }

  //Function to handle delete project
  function handleDeleteProject(projectToDelete) {
    setProjects(projects.filter((proj) => proj !== projectToDelete));
    setSelectedProject(null); // Return to default state
  }

  return (
    <>
      <Header />
      <div className="flex">

        <Sidebar 
        projects={projects}
        onSelectProject={setSelectedProject}
        onAddProject={handleCreateProject}
        />

       {selectedProject === "new" ? (
        <NewProjectForm onSave={handleSaveProject} onCancel={handleCancelPoject} />
       ) : selectedProject ? (
        <ProjectDetails project={selectedProject} onDelete={handleDeleteProject}/>
       ) : (
        <NoProjectSelected onCreateProject={handleCreateProject} />
       )}
      </div>
    </>
  );
}
