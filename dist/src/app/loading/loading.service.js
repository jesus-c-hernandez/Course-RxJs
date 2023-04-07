"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let LoadingService = class LoadingService {
    constructor() {
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    showLoaderUntilComplete(obs$) {
        return (0, rxjs_1.of)(null).pipe((0, operators_1.tap)(() => this.loadingOn()), (0, operators_1.concatMap)(() => obs$), (0, operators_1.finalize)(() => this.loadingOff()));
    }
    loadingOn() {
        this.loadingSubject.next(true);
    }
    loadingOff() {
        this.loadingSubject.next(false);
    }
};
LoadingService = __decorate([
    (0, core_1.Injectable)()
], LoadingService);
exports.LoadingService = LoadingService;
//# sourceMappingURL=loading.service.js.map