import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = 3001;

app.use(cors());

app.get("/test", (req, res) => {
  console.log("test");
  res.send("Route is working");
});

app.listen(PORT, () => {
  console.log(`App now running on port ${PORT}`);
});
