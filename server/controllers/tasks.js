const mongoose = require('mongoose');
const tasks = new mongoose.model('Task');

module.exports = {
    index: (req,res)=>{
        tasks.find({}, function(err, data){
            if(err){
                console.log(err);
            }
            res.json({message: "Success", data: data});
        })
    },
    search:(req,res)=>{
        tasks.findById(req.params.id, function(err, data){
            if(err){
                console.log(err);
            }
            res.json({message: "Success", data: data});
        })
    },
    create:(req,res)=>{
        tasks.create(req.body, function(err, data){
            if(err){
                console.log(err);
            }
            res.json({message: "Success", data: data});
        })
    },
    update:(req,res)=>{
        tasks.findByIdAndUpdate(req.params.id, req.body, function(err, data){
            if(err){
                console.log(err);
            }
            res.json({message: "Success", data: data});
        })
    },
    delete:(req,res)=>{
        tasks.findByIdAndRemove(req.params.id, function(err, data){
            if(err){
                console.log(err);
            }
            res.json({message: "Success", data: data});
        })
    }
}