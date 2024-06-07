import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { log } from "console";
import User from "../models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port: number = 4000;
const jwtSecret : string = 'fsdasandkajksdsadas';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

//UcHDTOU62TuR1KOR

if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is not defined in the environment variables');
}


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.get("/", (req, res) => {
  res.json("hello ai");
});

app.get("/test", (req, res) => {
  res.json("hello");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user", details: error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const passOK = await bcrypt.compare(password, user.password);
    if (passOK) {
      jwt.sign(
        { email: user.email, id: user._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("pass OK");
        }
      );
    } else {
      res.status(422).json("pass not okay");
    }
  } else {
    res.json("not found");
  }
});

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`);
});