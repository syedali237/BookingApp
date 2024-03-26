import express from "express";

const app = express();
const port : number = 4000;

app.get("/" , (req,res) => {
    res.json("hello ai");
})

app.listen(port , () => {
    console.log(`Backend is listening on port ${port}`);
})