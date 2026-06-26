import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
    res.json({ message: "Hello World from Node.js and Express! v1 an deploy it ,Whooo!!!! and enjoy!" })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});