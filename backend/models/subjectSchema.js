import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
  TenMH: String
})

var Subject = mongoose.model("Subject", subjectSchema)

export default Subject
