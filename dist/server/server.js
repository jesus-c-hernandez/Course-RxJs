"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const get_courses_route_1 = require("./get-courses.route");
const search_lessons_route_1 = require("./search-lessons.route");
const save_course_route_1 = require("./save-course.route");
const login_route_1 = require("./login.route");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({ origin: true }));
app.route('/api/courses').get(get_courses_route_1.getAllCourses);
app.route('/api/courses/:id').get(get_courses_route_1.getCourseById);
app.route('/api/lessons').get(search_lessons_route_1.searchLessons);
app.route('/api/courses/:id').put(save_course_route_1.saveCourse);
app.route('/api/login').post(login_route_1.loginUser);
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '../app/index.html');
});
const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' +
        httpServer.address()['port']);
});
//# sourceMappingURL=server.js.map