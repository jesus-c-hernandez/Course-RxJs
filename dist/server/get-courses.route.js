"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.getAllCourses = void 0;
const db_data_1 = require("./db-data");
function getAllCourses(req, res) {
    // console.log('ERROR loading courses!');
    // res.status(500).json({ message: 'random error occurred.' });
    // return;
    setTimeout(() => {
        res.status(200).json({ payload: Object.values(db_data_1.COURSES) });
    }, 1500);
}
exports.getAllCourses = getAllCourses;
function getCourseById(req, res) {
    const courseId = parseInt(req.params['id']);
    const courses = Object.values(db_data_1.COURSES);
    const course = courses.find((c) => c.id === courseId);
    res.status(200).json(course);
}
exports.getCourseById = getCourseById;
//# sourceMappingURL=get-courses.route.js.map