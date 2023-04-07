"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseComponent = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let CourseComponent = class CourseComponent {
    constructor(route, coursesService) {
        this.route = route;
        this.coursesService = coursesService;
    }
    ngOnInit() {
        const courseId = parseInt(this.route.snapshot.paramMap.get('courseId'));
        const course$ = this.coursesService
            .loadCourseById(courseId)
            .pipe((0, operators_1.startWith)({}));
        const lessons$ = this.coursesService
            .loadAllCourseLessons(courseId)
            .pipe((0, operators_1.startWith)([]));
        this.data$ = (0, rxjs_1.combineLatest)([course$, lessons$]).pipe((0, operators_1.map)(([course, lessons]) => {
            return {
                course,
                lessons,
            };
        }), (0, operators_1.tap)(console.log));
    }
};
CourseComponent = __decorate([
    (0, core_1.Component)({
        selector: 'course',
        templateUrl: './course.component.html',
        styleUrls: ['./course.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map