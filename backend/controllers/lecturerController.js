import asyncHandler from "express-async-handler";
import Lecturer from "../models/lecturerSchema.js";
import People from "../models/peopleSchema.js";

const getLecturerList = asyncHandler(async (req, res) => {
  const lecturers = await Lecturer.find({});
  res.json(lecturers);
});

const getLecturer = asyncHandler(async (req, res) => {
  const lecturer = await Lecturer.findById(req.params.Id);
  res.json(lecturer);
});

const authLecturer = asyncHandler(async (req, res) => {
  const people = await People.findOne({ CMND: req.query.cmnd });
  const lecturer = await Lecturer.findOne({
    People: people._id,
    Password: req.query.password,
  });
  res.json({ ...people._doc, ...lecturer._doc });
});
export { getLecturerList, getLecturer, authLecturer };
