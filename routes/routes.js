import koaRouter from 'koa-router';
import { 
    addCourseController,
    deleteCourseController,
    editCourseController,
    indexController,
    updateCourseController,
    viewAllCoursesController,
    viewSpecificCourseController
} from '../controllers/courseControllers.js';

const router = new koaRouter()

// routes
router.get('/', indexController);
router.post('/addcourse', addCourseController);
router.get('/courses', viewAllCoursesController);
router.get('/course/:id', viewSpecificCourseController);
router.get('/editcourse/:id', editCourseController);
router.post('/editcourse/:id', updateCourseController);
router.get('/deletecourse/:id', deleteCourseController);

export default router