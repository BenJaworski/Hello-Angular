const mongoose = require('mongoose');
const controller = require('../controllers/tasks.js');

module.exports = (app)=>{
    app.get('/tasks', controller.index)
    app.get('/tasks/:id', controller.search)
    app.post('/tasks', controller.create)
    app.put('/tasks/:id', controller.update)
    app.delete('/tasks/:id', controller.delete)
}