const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users")
const butterflyRoute = require("./routes/butterfly")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const letterRoute = require("./routes/letter")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("[+] Connected to MongoDB")
});

//Middleware:
app.use(express.json()) //this is a body parser for post requests and stuff
app.use(helmet())
app.use(morgan("common"))

//
app.get("/", (req, res) => {
    res.send("hello!");
})
app.get("/users", (req, res) => {
    res.send("hello users page!");
})

app.use("/api/users", userRoute);
app.use("/api/butterfly", butterflyRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/letters", letterRoute);

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.listen(8800, () => {
    console.log("[+] Backend Running on 8800")
});