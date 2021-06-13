import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const lecturerSchema = new mongoose.Schema({
  People: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "People"
  },
  Password: String,
  Activate: Number
})

lecturerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password)
}

const Lecturer = mongoose.model("Lecturer", lecturerSchema, "lecturers")

export default Lecturer
