"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesStore = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const course_1 = require("../../model/course");
const operators_1 = require("rxjs/operators");
let CoursesStore = class CoursesStore {
    constructor(http, loadingService, messagesService) {
        this.http = http;
        this.loadingService = loadingService;
        this.messagesService = messagesService;
        this.subject = new rxjs_1.BehaviorSubject([]);
        this.courses$ = this.subject.asObservable();
        this.loadAllCourses();
    }
    loadAllCourses() {
        const loadCourses$ = this.http.get(`/api/courses`).pipe((0, operators_1.map)((resp) => resp['payload']), (0, operators_1.catchError)((err) => {
            const message = 'Could not load courses.';
            this.messagesService.showErrors(message);
            console.log(message, err);
            return (0, rxjs_1.throwError)(err);
        }), (0, operators_1.tap)((courses) => this.subject.next(courses)));
        this.loadingService.showLoaderUntilComplete(loadCourses$).subscribe();
    }
    saveCourse(courseId, changes) {
        const courses = this.subject.getValue();
        const index = courses.findIndex((course) => course.id === courseId);
        const newCourse = {
            ...courses[index],
            ...changes,
        };
        const newCourses = courses.slice(0);
        newCourses[index] = newCourse;
        this.subject.next(newCourses);
        return this.http.put(`/api/courses/${courseId}`, changes).pipe((0, operators_1.catchError)((err) => {
            const message = 'Could not save course';
            console.log(message, err);
            this.messagesService.showErrors(message);
            return (0, rxjs_1.throwError)(err);
        }), (0, operators_1.shareReplay)());
    }
    filterByCategory(category) {
        return this.courses$.pipe((0, operators_1.map)((courses) => courses
            .filter((course) => course.category === category)
            .sort(course_1.sortCoursesBySeqNo)));
    }
};
CoursesStore = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], CoursesStore);
exports.CoursesStore = CoursesStore;
//# sourceMappingURL=courses.store.js.map