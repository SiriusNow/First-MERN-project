const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    code:{
        type: Number,
        required: false
    },
    to:{
        type: Number,
        required: false
    },
    day:{
        type: Number,
        required: false
    }
})

const formModel = mongoose.model("form",formSchema);

module.exports= formModel;