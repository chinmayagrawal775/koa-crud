import koaRouter from 'koa-router';
import { 
    addCourseController,
    deleteCourseController,
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
router.post('/updatecourse/:id', updateCourseController);
router.get('/deletecourse/:id', deleteCourseController);

export default router