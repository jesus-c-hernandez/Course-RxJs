"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStore = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const AUTH_DATA = 'auth_data';
let AuthStore = class AuthStore {
    constructor(http) {
        this.http = http;
        this.subject = new rxjs_1.BehaviorSubject(null);
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.pipe((0, operators_1.map)((user) => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe((0, operators_1.map)((loggedIn) => !loggedIn));
        const user = localStorage.getItem(AUTH_DATA);
        if (user) {
            this.subject.next(JSON.parse(user));
        }
    }
    login(email, password) {
        return this.http.post('/api/login', { email, password }).pipe((0, operators_1.tap)((user) => {
            this.subject.next(user);
            localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }), (0, operators_1.shareReplay)());
    }
    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
};
AuthStore = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], AuthStore);
exports.AuthStore = AuthStore;
//# sourceMappingURL=auth.store.js.map