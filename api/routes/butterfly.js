const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Butterfly = require('../models/Butterfly');

// Create a Butterfly
router.post('/', async (req, res) => {
    const { username, email, password, name, gender, DOB, city, interests, schedule } = req.body;

    try {
        // Hash password with bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Butterfly document with the hashed password
        const newButterfly = new Butterfly({
            username,
            email,
            password: hashedPassword,
            name,
            gender,
            DOB,
            city,
            interests,
            schedule
        });

        // Save the new Butterfly document to the database
        const savedButterfly = await newButterfly.save();
        res.status(201).json(savedButterfly);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Edit a Butterfly (without editing the password)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, name, gender, DOB, city, interests, schedule } = req.body;
    try {
        const butterfly = await Butterfly.findByIdAndUpdate(id, {
            username,
            email,
            name,
            gender,
            DOB,
            city,
            interests,
            schedule
        }, { new: true });

        if (!butterfly) {
            return res.status(404).json({ message: 'Butterfly not found' });
        }
        res.status(200).json(butterfly);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Change password of a Butterfly
router.put("/:id/update-password", async (req, res) => {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    try {
        // Find the Butterfly by ID
        const butterfly = await Butterfly.findById(id);
        // Check if the current password matches
        const isMatch = await bcrypt.compare(currentPassword, butterfly.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // Encrypt the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        // Update the password and save the Butterfly
        butterfly.password = hashedPassword;
        await butterfly.save();
        return res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete a Butterfly
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedButterfly = await Butterfly.findByIdAndDelete(id);
        if (!deletedButterfly) {
            return res.status(404).send({ error: 'Butterfly not found' });
        }
        res.send(deletedButterfly);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
});

// Get a Butterfly based on queries
router.get('/', async (req, res) => {
    try {
        const { id, username, email, gender, city, interests } = req.query;
        let query = {};

        if (id) {
            const butterfly = await Butterfly.findById(id);
            res.status(200).json(butterfly);
        }

        if (username) {
            query.username = { $regex: new RegExp(username, "i") };
        }

        if (email) {
            query.email = { $regex: new RegExp(email, "i") };
        }

        if (gender) {
            query.gender = gender;
        }

        if (city) {
            query.city = { $regex: new RegExp(city, "i") };
        }

        if (interests) {
            query.interests = { $in: interests };
        }

        const butterflies = await Butterfly.find(query);
        res.status(200).json(butterflies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;