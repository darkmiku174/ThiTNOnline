require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

connectDB();

var apiQuestionRoute = require("./api/routes/question.route");

var port = 5000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/questions", apiQuestionRoute);

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
