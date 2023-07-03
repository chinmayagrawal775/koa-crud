// Data
const courses = [
    { id: 1, title: "javascript", duration: "1week" },
    { id: 2, title: "typescript", duration: "1week" },
];

// Controllers
const indexController = async ctx => {
    await ctx.render('index')
}

const addCourseController = async ctx => {
    const body = ctx.request.body;
    const course = { id: body.id, title: body.title, duration: body.duration };
    courses.push(course);
    ctx.redirect('/courses');
}

const viewAllCoursesController = async ctx => {
    await ctx.render('courses', {
        courses: courses
    });
}

const viewSpecificCourseController = async ctx => {
    const course = courses.find(course => course.id == ctx.params.id)
    await ctx.render('course', {
        course: course
    });
}

const editCourseController = async ctx => {
    const course = courses.find(course => course.id == ctx.params.id);
    await ctx.render('editcourse', {
        course: course
    });
}

const updateCourseController = async ctx => {
    const body = ctx.request.body;
    const course = { id: body.id, title: body.title, duration: body.duration };

    const course_index = courses.findIndex(course => course.id == ctx.params.id);
    courses[course_index] = course;
    ctx.redirect('/courses');
}

const deleteCourseController = async ctx => {
    const course_index = courses.findIndex(course => course.id == ctx.params.id);
    courses.splice(course_index, 1)
    ctx.redirect('/courses');
}

export {
    indexController,
    addCourseController,
    viewAllCoursesController,
    viewSpecificCourseController,
    editCourseController,
    updateCourseController,
    deleteCourseController
}