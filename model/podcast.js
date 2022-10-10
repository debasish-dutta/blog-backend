import mongoose from "mongoose";

const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    audio: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("podcast", podcastSchema);