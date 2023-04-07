"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const courses_card_list_component_1 = require("./courses-card-list.component");
describe('CoursesCardListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [courses_card_list_component_1.CoursesCardListComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(courses_card_list_component_1.CoursesCardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=courses-card-list.component.spec.js.map