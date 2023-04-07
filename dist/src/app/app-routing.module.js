"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
const course_component_1 = require("./course/course.component");
const login_component_1 = require("./login/login.component");
const search_lessons_component_1 = require("./search-lessons/search-lessons.component");
const routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'search-lessons',
        component: search_lessons_component_1.SearchLessonsComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'courses/:courseId',
        component: course_component_1.CourseComponent,
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: '**',
        redirectTo: '/',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes, {})],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map