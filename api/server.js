const express = require('express');

const ResourcesRouter = require('./resource/router.js');
const ProjectsRouter = require('./project/router.js');
const TasksRouter = require('./task/router.js');

const server = express();


server.use(express.json());

server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;