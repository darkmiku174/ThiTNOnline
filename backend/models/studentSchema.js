import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const studentSchema = new mongoose.Schema({
  People: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "People"
  },
  Password: String,
  Activate: Number
})

studentSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("enteredPassword:" + enteredPassword)
  console.log(this.password)
  return await bcrypt.compare(enteredPassword, this.Password)
}

const Student = mongoose.model("Student", studentSchema, "students")

export default Student
