const db = require('../../data/dbConfig');

function getResources() {
 return db('resources')
 }

 async function addResource(resource) {
    const resourceId = await db('resources').insert(resource)
    const newResource = await  db('resources').where('resource_id', resourceId[0]);
    return newResource[0];
  }

module.exports = {
  getResources,
  addResource 
  }
  