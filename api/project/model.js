const db = require('../../data/dbConfig');

async function getProjects() {
  const projectsList = await db('projects');
  return projectsList.map(project => project.project_completed === 0 
  ? {...project, project_completed: false} 
  : {...project, project_completed: true})
}

async function addProject(project) {
  const projectId = await db('projects').insert(project)
  const newProject = await db('projects').where('project_id', projectId).first()
  return newProject.project_completed === 0 
  ? {...newProject, project_completed: false} 
  : {...newProject, project_completed: true}    
  }

module.exports = {
  getProjects,
  addProject 
  }
  