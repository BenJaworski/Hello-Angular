const mongoose = require('mongoose');
const tasks = new mongoose.model('Task');

module.exports = {
    index: (req,res)=>{
        tasks.find({})
            .then((data)=> {
                res.json({message: "Success", data: data});
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    search:(req,res)=>{
        tasks.findById(req.params.id)
            .then((data)=> {
                res.json({message: "Success", data: data});
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    create:(req,res)=>{
        tasks.create(req.body)
            .then((data)=> {
                console.log(data)
                res.json({message: "Success", data: data});
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    update:(req,res)=>{
        tasks.findByIdAndUpdate(req.params.id, req.body)
            .then((data)=> {
                res.json({message: "Success", data: data});
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    delete:(req,res)=>{
        tasks.findByIdAndDelete(req.params.id)
            .then((data)=> {
                res.json({message: "Success", data: data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }
}