"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesCardListComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const operators_1 = require("rxjs/operators");
const course_dialog_component_1 = require("../../course-dialog/course-dialog.component");
let CoursesCardListComponent = class CoursesCardListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.courses = [];
        this.coursesChanged = new core_1.EventEmitter();
    }
    ngOnInit() { }
    editCourse(course) {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';
        dialogConfig.data = course;
        const dialogRef = this.dialog.open(course_dialog_component_1.CourseDialogComponent, dialogConfig);
        dialogRef
            .afterClosed()
            .pipe((0, operators_1.filter)((val) => !!val), (0, operators_1.tap)(() => {
            this.coursesChanged.emit();
        }), (0, operators_1.finalize)(() => console.log('completed')))
            .subscribe();
    }
};
__decorate([
    (0, core_1.Input)()
], CoursesCardListComponent.prototype, "courses", void 0);
__decorate([
    (0, core_1.Output)()
], CoursesCardListComponent.prototype, "coursesChanged", void 0);
CoursesCardListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'courses-card-list',
        templateUrl: './courses-card-list.component.html',
        styleUrls: ['./courses-card-list.component.scss'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], CoursesCardListComponent);
exports.CoursesCardListComponent = CoursesCardListComponent;
//# sourceMappingURL=courses-card-list.component.js.map