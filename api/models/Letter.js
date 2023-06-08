const mongoose = require("mongoose");

const LetterSchema = new mongoose.Schema(
    {
        senderId: {
            type: String,
            required: true,
        },
        recvId: {
            type: String,
            required: true,
        },
        convoId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            max: 500,
        },
        status: {
            type: Number,
            enum: [0, 1, 2] //Sent, Available, Read
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Letter", LetterSchema);