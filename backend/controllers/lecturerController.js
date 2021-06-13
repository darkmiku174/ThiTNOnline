import asyncHandler from "express-async-handler";
import Lecturer from "../models/lecturerSchema.js";
import People from "../models/peopleSchema.js";
import generateToken from '../ultils/generateToken.js'

const getLecturerList = asyncHandler(async (req, res) => {
  const lecturers = await Lecturer.find({});
  res.json(lecturers);
});

const getLecturer = asyncHandler(async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.Id);
  res.json(lecturer);
});

const authLecturer = asyncHandler(async (req, res) => {
  const people = await People.findOne({CMND: req.query.cmnd});
  if (!people) {
    res.status(404)
    res.json({message: "User not found"})
  }
  const lecturer = await Lecturer.findOne({
    People: people._id
  });
  if (lecturer && (lecturer.matchPassword(req.query.password))) {
    delete lecturer._doc.Password
    res.json({...people._doc, ...lecturer._doc, token: generateToken(people._id)})
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
});

const updateLecturerProfile = asyncHandler(async (req, res) => {
  const lecturer = await Lecturer.findOne({People: req.user._id})
  if (lecturer.Password === req.body.Password) {
    req.user.CMND = req.body.CMND
    req.user.HoTen = req.body.HoTen
    req.user.NgaySinh = req.body.NgaySinh
    req.user.GioiTinh = req.body.GioiTinh
    console.log(req.user)
    await req.user.save()
    res.status(200).json({message: "Updated profile"})
  } else {
    res.json({message: "Wrong password"})
  }
})

export {getLecturerList, getLecturer, authLecturer, updateLecturerProfile};
