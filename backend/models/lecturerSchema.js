import mongoose from 'mongoose'

const lecturerSchema = new mongoose.Schema({
  People:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"People"
  },
  Password:String,
  Activate:Number
})

const Lecturer = mongoose.model("Lecturer",lecturerSchema)

export default Lecturer
