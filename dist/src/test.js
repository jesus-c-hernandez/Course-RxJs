"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/proxy.js");
require("zone.js/dist/sync-test");
require("zone.js/dist/jasmine-patch");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
// Prevent Karma from running prematurely.
__karma__.loaded = function () { };
// First, initialize the Angular testing environment.
(0, testing_1.getTestBed)().initTestEnvironment(testing_2.BrowserDynamicTestingModule, (0, testing_2.platformBrowserDynamicTesting)(), {
    teardown: { destroyAfterEach: false },
});
// Finally, start Karma to run the tests.
__karma__.start();
//# sourceMappingURL=test.js.map