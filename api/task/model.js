const db = require('../../data/dbConfig');

async function getTasks() {
 const tasksList = await db('tasks');
 const projects = await db('projects');
 const tasks = tasksList.map( task => {
    const {task_id, task_notes, task_description, task_completed, project_id} = task;
    const {project_name, project_description} = projects.filter( project => project.project_id === project_id)[0];
    return {
                task_id,
                task_notes,
                task_description,
                task_completed: task_completed === 0 ? false : true,
                project_name,
                project_description
            } 
})
 return tasks;
 }

 async function addTask(task) {
    const taskId = await db('tasks').insert(task)
    const newTask = await  db('tasks').where('task_id', taskId[0]);
    const {task_id, task_notes, task_description, task_completed} = newTask[0];
    return {
        task_id,
        task_notes,
        task_description,
        task_completed: task_completed === 0 ? false : true
    }
  }

module.exports = {
  getTasks,
  addTask 
  }
  