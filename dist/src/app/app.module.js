"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const menu_1 = require("@angular/material/menu");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const card_1 = require("@angular/material/card");
const home_component_1 = require("./home/home.component");
const about_component_1 = require("./about/about.component");
const tabs_1 = require("@angular/material/tabs");
const course_component_1 = require("./course/course.component");
const datepicker_1 = require("@angular/material/datepicker");
const dialog_1 = require("@angular/material/dialog");
const input_1 = require("@angular/material/input");
const list_1 = require("@angular/material/list");
const paginator_1 = require("@angular/material/paginator");
const progress_spinner_1 = require("@angular/material/progress-spinner");
const select_1 = require("@angular/material/select");
const sidenav_1 = require("@angular/material/sidenav");
const sort_1 = require("@angular/material/sort");
const table_1 = require("@angular/material/table");
const toolbar_1 = require("@angular/material/toolbar");
const http_1 = require("@angular/common/http");
const course_dialog_component_1 = require("./course-dialog/course-dialog.component");
const forms_1 = require("@angular/forms");
const material_moment_adapter_1 = require("@angular/material-moment-adapter");
const login_component_1 = require("./login/login.component");
const lesson_component_1 = require("./lesson/lesson.component");
const safe_url_pipe_1 = require("./common/safe-url.pipe");
const messages_component_1 = require("./messages/messages.component");
const search_lessons_component_1 = require("./search-lessons/search-lessons.component");
const loading_component_1 = require("./loading/loading.component");
const courses_card_list_component_1 = require("./components/courses-card-list/courses-card-list.component");
const messages_service_1 = require("./messages/messages.service");
const loading_service_1 = require("./loading/loading.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            course_component_1.CourseComponent,
            course_dialog_component_1.CourseDialogComponent,
            login_component_1.LoginComponent,
            lesson_component_1.LessonComponent,
            safe_url_pipe_1.SafeUrlPipe,
            messages_component_1.MessagesComponent,
            search_lessons_component_1.SearchLessonsComponent,
            loading_component_1.LoadingComponent,
            courses_card_list_component_1.CoursesCardListComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            menu_1.MatMenuModule,
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            card_1.MatCardModule,
            tabs_1.MatTabsModule,
            sidenav_1.MatSidenavModule,
            list_1.MatListModule,
            toolbar_1.MatToolbarModule,
            input_1.MatInputModule,
            table_1.MatTableModule,
            paginator_1.MatPaginatorModule,
            sort_1.MatSortModule,
            progress_spinner_1.MatProgressSpinnerModule,
            dialog_1.MatDialogModule,
            app_routing_module_1.AppRoutingModule,
            select_1.MatSelectModule,
            datepicker_1.MatDatepickerModule,
            material_moment_adapter_1.MatMomentDateModule,
            forms_1.ReactiveFormsModule,
        ],
        providers: [loading_service_1.LoadingService, messages_service_1.MessagesService],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [course_dialog_component_1.CourseDialogComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map