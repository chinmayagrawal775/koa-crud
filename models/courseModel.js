import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    duration: {type: String}
})

const courseModel = new mongoose.model('course', courseSchema);

export default courseModel;