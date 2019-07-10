const mongoose = require('mongoose');
const controller = require('../controllers/tasks.js');

module.exports = (app)=>{
    app.get('/tasks', controller.index)
    app.get('/tasks/:_id', controller.search)
    app.post('/tasks', controller.create)
    app.put('/tasks/:_id', controller.update)
    app.delete('/tasks/:_id', controller.delete)
}