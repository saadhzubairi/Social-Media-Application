const router = require("express").Router();
const Butterfly = require("../models/Butterfly");
const Letter = require("../models/Letter");
const verifyToken = require("../utils/verifyToken");

router.get('/', async (req, res) => {
    try {
        const { id, senderId, recvId, convoId, status } = req.query;
        let query = {};

        if (id) {
            const letter = await Letter.findById(id);
            return res.status(200).json(letter);
        }

        if (senderId) {
            query.senderId = senderId;
        }

        if (recvId) {
            query.recvId = recvId;
        }

        if (convoId) {
            query.convoId = convoId;
        }

        if (status) {
            query.status = status;
        }
        const letter = await Letter.find(query);
        res.status(200).json(letter);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/', async (req, res) => {
    try {
        const { senderId, recvId, convoId, content, status } = req.body;
        const letter = new Letter({
            senderId,
            recvId,
            convoId,
            content,
            status,
        });
        await letter.save();
        res.status(201).json(letter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const letter = await Letter.findById(id)
        if (req.user.id === letter.senderId) {
            await Letter.findByIdAndDelete(id);
            res.status(200).json({ message: "Letter deleted successfully" });
        }
        else {
            res.status(403).json({ message: "You can only delete your own letter" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;