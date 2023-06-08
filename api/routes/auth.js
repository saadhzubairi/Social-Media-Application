const router = require("express").Router();
const Butterfly = require("../models/Butterfly")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//Register:

router.post("/register", async (req, res) => {
    try {
        //Generate PWD
        const salt = await bcrypt.genSalt(10);
        const hashedPWD = await bcrypt.hash(req.body.password, salt);
        //Create user
        const newUser = new Butterfly({
            username: req.body.username,
            email: req.body.email,
            password: hashedPWD,
        });
        //Save and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Login:
router.post("/login", async (req, res) => {
    try {
        const user = await Butterfly.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found.");
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Password");

        const accessToken = jwt.sign({ id: user._id }, "my secret key")
        res.status(200).json({ user: user, token: accessToken });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router