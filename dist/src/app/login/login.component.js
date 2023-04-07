"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let LoginComponent = class LoginComponent {
    constructor(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.form = fb.group({
            email: ['test@angular-university.io', [forms_1.Validators.required]],
            password: ['test', [forms_1.Validators.required]],
        });
    }
    ngOnInit() { }
    login() {
        const val = this.form.value;
        this.auth.login(val.email, val.password).subscribe(() => {
            this.router.navigateByUrl('/courses');
        }, (err) => {
            alert('Login failed');
        });
    }
};
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map