const mongoose = require("mongoose")

const staffSchema = new mongoose.Schema({
    staffname:{
        type: String,
        required: true        
    },
    staffId:{
        type: Number,
        required:true
    },
    task:{
        type:String,
        required:true
    },
})

const staffModel = mongoose.model("staff",staffSchema);

module.exports= staffModel;