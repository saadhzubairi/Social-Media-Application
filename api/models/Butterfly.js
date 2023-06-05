const mongoose = require("mongoose")

const NameSchema = new mongoose.Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    }
})

const DayScheduleSchema = new mongoose.Schema({
    day: {
        type: String,
        default: "Sunday"
    },
    busy_1: {
        type: Boolean,
        default: false
    },
    busy_2: {
        type: Boolean,
        default: false
    },
    busy_3: {
        type: Boolean,
        default: false
    },
    busy_4: {
        type: Boolean,
        default: false
    },
    busy_5: {
        type: Boolean,
        default: false
    },
    busy_6: {
        type: Boolean,
        default: false
    },
    busy_7: {
        type: Boolean,
        default: false
    },
    busy_8: {
        type: Boolean,
        default: false
    }
})

const Butterfly = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: NameSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Other"
    },
    DOB: {
        type: String,
        default: "N/A"
    },
    MBTI: {
        type: String,
        default: "N/A"
    },
    city: {
        type: String,
        default: "Karachi"
    },
    interests: {
        type: [String],
        required: true,
        minLength: 1
    },
    bio: {
        type: String,
        default: ""
    },
    schedule: {
        type: [DayScheduleSchema],
        default: []
    },
    hasInputtedSchedule: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    pals: {
        type: [String],
        default: []
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Butterfly", Butterfly)