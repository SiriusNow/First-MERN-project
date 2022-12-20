const express = require("express")
const mongoose = require("mongoose")
const formModel = require ("./models/tasks")
const staffModel = require ("./models/staffs")
const app = express()
const cors= require("cors")

app.use(express.json());
app.use(cors());

try
{mongoose.connect("mongodb+srv://testapp:20010524@cluster0.ncckvn2.mongodb.net/test");} 
catch(e){
    console.log(e)
}

app.get("/getForms",async(req,res)=>{
    const form = await formModel.find({});
    formModel.find({},async(err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});


app.post("/createForm", async (req, res)=>{
    const form= req.body;
    const newForm =  new formModel(form);
    await newForm.save();

  
    res.json(form);
    
})




app.get("/getStaff",async(req,res)=>{
    const staff = await staffModel.find({});

    staffModel.find({},async(err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});


app.post("/createStaff", async (req, res)=>{
    const staff= req.body;
    const newStaff =  new staffModel(staff);
    await newStaff.save();
    res.json(staff);
})



app.get("/searchStaff", async (req, res)=>{

    const {staffId}= req.query;
    const staff = await staffModel.findOne({staffId})

    res.send(staff)    
})




    

// app.post("/updateTask", async (req, res)=>{
//     const task= req.body;

//     console.log(task)
//     // const aa = await taskModel.find({_id:"62b3edc6fbd9dfaad13cd8d2"}
    
//     const aa = await taskModel.updateMany({_id:task.id}, {$set:task});

//     console.log(aa)
    

// app.post("/deleteTask", async (req,res)=>{
//     const {taskId}= req.body;
//     await taskModel.deleteOne({_id:taskId});

// });



app.listen(3001, ()=>{
    console.log("Server ajiljiin");
})