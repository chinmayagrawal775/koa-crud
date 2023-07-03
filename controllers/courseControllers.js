import courseModel from "../models/courseModel.js";

// Controllers
const indexController = async ctx => {
    ctx.response.staus = 200
    ctx.body = {"msg": "Working"}
}

const addCourseController = async ctx => {
    const body = ctx.request.body;
    const newCourse = courseModel({
        id: body.id,
        title: body.title,
        duration: body.duration
    });
    await newCourse.save()
    ctx.response.staus = 201
    ctx.body = {"msg": "Course Added Successfully"};
}

const viewAllCoursesController = async ctx => {
    const courses = await courseModel.find()
    ctx.response.staus = 200
    ctx.body = {"course": courses}
}

const viewSpecificCourseController = async ctx => {
    const course = await courseModel.find({id: ctx.params.id})
    ctx.response.staus = 200
    ctx.body = {"courses": course}
}

const updateCourseController = async ctx => {
    const body = ctx.request.body;
    await courseModel.updateOne({id: ctx.params.id}, {id: body.id, title: body.title, duration: body.duration})
    ctx.response.staus = 200
    ctx.body = {"msg": "Course Updated Successfully"};
}

const deleteCourseController = async ctx => {
    await courseModel.deleteOne({id:ctx.params.id})
    ctx.response.staus = 200
    ctx.body = {"msg": "Course Deleted Successfully"};
}

export {
    indexController,
    addCourseController,
    viewAllCoursesController,
    viewSpecificCourseController,
    updateCourseController,
    deleteCourseController
}