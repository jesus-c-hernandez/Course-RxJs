"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchLessons = void 0;
const db_data_1 = require("./db-data");
const timers_1 = require("timers");
function searchLessons(req, res) {
    const queryParams = req.query;
    const courseId = queryParams.courseId, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder || 'asc', pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize) || 3;
    let lessons;
    if (courseId) {
        lessons = Object.values(db_data_1.LESSONS).filter(lesson => lesson.courseId == courseId).sort((l1, l2) => l1.id - l2.id);
    }
    else {
        lessons = Object.values(db_data_1.LESSONS);
    }
    if (filter) {
        lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }
    if (sortOrder == "desc") {
        lessons = lessons.reverse();
    }
    const initialPos = pageNumber * pageSize;
    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
    (0, timers_1.setTimeout)(() => {
        res.status(200).json({ payload: lessonsPage });
    }, 1000);
}
exports.searchLessons = searchLessons;
//# sourceMappingURL=search-lessons.route.js.map