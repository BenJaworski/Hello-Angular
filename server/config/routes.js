const mongoose = require('mongoose');
const controller = require('../controllers/tasks.js');

module.exports = (app)=>{
    app.get('/tasks', controller.index)
    app.get('/task/:_id', controller.search)
    app.post('/new', controller.create)
    app.put('/:_id', controller.update)
    app.delete('/remove/:_id', controller.delete)
}