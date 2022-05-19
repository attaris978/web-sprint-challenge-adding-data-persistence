const db = require('../../data/dbConfig');

async function getTasks() {
  const tasksList = await db('tasks AS t')
  .join('projects AS p', 'p.project_id', 't.project_id')
  .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
  return tasksList.map(task => task.task_completed === 0 ? {...task, task_completed: false} : {...task, task_completed: true});
}

 async function addTask(task) {
    const taskId = await db('tasks').insert(task);
    const newTask = await  db('tasks').where('task_id', taskId[0]).first();
    return newTask.task_completed === 0 ? {...newTask, task_completed: false} : {...newTask, task_completed: true};    
  }

module.exports = {
  getTasks,
  addTask 
  }
  