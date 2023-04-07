"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCourse = void 0;
const db_data_1 = require("./db-data");
const timers_1 = require("timers");
function saveCourse(req, res) {
    // console.log('ERROR saving course!');
    // res.sendStatus(500);
    // return;
    const id = req.params['id'], changes = req.body;
    console.log('Saving course changes', id, JSON.stringify(changes));
    const newCourse = {
        ...db_data_1.COURSES[id],
        ...changes,
    };
    db_data_1.COURSES[id] = newCourse;
    console.log('new course version', newCourse);
    (0, timers_1.setTimeout)(() => {
        res.status(200).json(db_data_1.COURSES[id]);
    }, 2000);
}
exports.saveCourse = saveCourse;
//# sourceMappingURL=save-course.route.js.map