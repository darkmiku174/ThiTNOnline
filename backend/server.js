import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import examRoutes from './routes/examRoutes.js'
import subjectRoutes from './routes/subjectRoutes.js'
import lecturerRoutes from './routes/lecturerRoutes.js'

dotenv.config();

// Kết nối đến server
connectDB();

const app = express();

app.use(express.json())

// cái này để test server lúc đầu thôi
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dùng route ở đây
app.use("/api/exams", examRoutes)
app.use("/api/subjects", subjectRoutes)
app.use("/api/lecturers", lecturerRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
