import express from "express";
import axios from "axios";
import pg from "pg";
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";
const app = express();
const PORT = 3001;
env.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.post("/add", async (req, res) => {
  console.log(req.body);
  const { name, price, image, desc } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO products (product_name,product_price,product_image,product_desc) VALUES($1,$2,$3,$4) RETURNING *",
      [name, price, image, desc]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/list", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`App now running on port ${PORT}`);
});
