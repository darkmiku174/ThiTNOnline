import mongoose from 'mongoose'

const peopleSchema = new mongoose.Schema({
  CMND: String,
  HoTen: String,
  NgaySinh: Date,
  GioiTinh: Number,
  AnhDaiDien: String,
  GhiChu: String
})

const People = mongoose.model("People", peopleSchema)

export default People
