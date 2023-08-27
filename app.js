import express from "express";
import dotenv from "dotenv";
import conn from "./db.js"

dotenv.config();

// Connect to DB
conn();

const app = express();
const port = process.env.PORT;

//ejs temp engine
app.set("view engine", "ejs");

//static file middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Application has been started at ${port}`);
});
