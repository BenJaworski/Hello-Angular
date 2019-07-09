const mongoose = require('mongoose');
const controller = require('../controllers/tasks.js');

module.exports = (app)=>{
    app.get('/', controller.index)
    app.get('/:_id', controller.search)
    app.post('/new', controller.create)
    app.post('/:_id', controller.update)
    app.post('/remove/:_id', controller.delete)
}