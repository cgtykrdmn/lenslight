import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";

dotenv.config();

// Connect to DB
conn();

const app = express();
const port = process.env.PORT;

//ejs temp engine
app.set("view engine", "ejs");

//static file middleware
app.use(express.static("public"));

//router
app.use("/", pageRoute);
app.use("/photos", photoRoute);

app.listen(port, () => {
  console.log(`Application has been started at ${port}`);
});
