"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
let CoursesService = class CoursesService {
    constructor(http) {
        this.http = http;
    }
    loadCourseById(courseId) {
        return this.http
            .get(`/api/courses/${courseId}`)
            .pipe((0, operators_1.shareReplay)());
    }
    loadAllCourseLessons(courseId) {
        return this.http
            .get('/api/lessons', {
            params: {
                pageSize: '10000',
                courseId: courseId.toString(),
            },
        })
            .pipe((0, operators_1.map)((res) => res['payload']), (0, operators_1.shareReplay)());
    }
    loadAllCourses() {
        return this.http.get('/api/courses').pipe((0, operators_1.map)((respApi) => respApi['payload']), (0, operators_1.shareReplay)());
    }
    saveCourse(courseId, changes) {
        return this.http
            .put(`/api/courses/${courseId}`, changes)
            .pipe((0, operators_1.shareReplay)());
    }
    searchLessons(search) {
        return this.http
            .get('/api/lessons', {
            params: {
                filter: search,
                pageSize: '100',
            },
        })
            .pipe((0, operators_1.map)((res) => res['payload']), (0, operators_1.shareReplay)());
    }
};
CoursesService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map