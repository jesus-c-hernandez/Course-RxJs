"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
let HomeComponent = class HomeComponent {
    constructor(coursesStore) {
        this.coursesStore = coursesStore;
    }
    ngOnInit() {
        this.reloadCourses();
    }
    reloadCourses() {
        this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');
        this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
    }
};
HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map