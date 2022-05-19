const db = require('../../data/dbConfig');

async function getProjects() {
 const projectsList = await db('projects');
 return projectsList.map(project => {
    const {project_id, project_name, project_description, project_completed} = project;
    return {
        project_id,
        project_name,
        project_description,
        project_completed: project_completed === 0 ? false : true
    } 
 })
 }

 async function addProject(project) {
    const projectId = await db('projects').insert(project)
    const newProject = await  db('projects').where('project_id', projectId[0]);
    const {project_id, project_name, project_description, project_completed} = newProject[0];
    return {
        project_id,
        project_name,
        project_description,
        project_completed: project_completed === 0 ? false : true
    }
  }

module.exports = {
  getProjects,
  addProject 
  }
  