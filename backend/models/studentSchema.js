import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  People:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"People"
  },
  Password:String,
  Activate:Number
})

const Student = mongoose.model("Student",studentSchema,"students")

export default Student
