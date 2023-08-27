import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.listen(port, () => {
  console.log(`Application has been started at ${port}`);
});
