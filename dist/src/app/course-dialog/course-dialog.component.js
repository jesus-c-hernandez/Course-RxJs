"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDialogComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const forms_1 = require("@angular/forms");
const moment = require("moment");
const loading_service_1 = require("../loading/loading.service");
const messages_service_1 = require("../messages/messages.service");
let CourseDialogComponent = class CourseDialogComponent {
    constructor(fb, dialogRef, course, coursesStore, loadingService, messagesServices) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.coursesStore = coursesStore;
        this.loadingService = loadingService;
        this.messagesServices = messagesServices;
        this.course = course;
        this.form = fb.group({
            description: [course.description, forms_1.Validators.required],
            category: [course.category, forms_1.Validators.required],
            releasedAt: [moment(), forms_1.Validators.required],
            longDescription: [course.longDescription, forms_1.Validators.required],
        });
    }
    ngAfterViewInit() { }
    save() {
        const changes = this.form.value;
        this.dialogRef.close(changes);
        this.coursesStore.saveCourse(this.course.id, changes).subscribe();
    }
    close() {
        this.dialogRef.close();
    }
};
CourseDialogComponent = __decorate([
    (0, core_1.Component)({
        selector: 'course-dialog',
        templateUrl: './course-dialog.component.html',
        styleUrls: ['./course-dialog.component.css'],
        providers: [loading_service_1.LoadingService, messages_service_1.MessagesService],
    }),
    __param(2, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA))
], CourseDialogComponent);
exports.CourseDialogComponent = CourseDialogComponent;
//# sourceMappingURL=course-dialog.component.js.map