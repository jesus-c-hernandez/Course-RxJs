"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const db_data_1 = require("./db-data");
function loginUser(req, res) {
    console.log("User login attempt ...");
    const { email, password } = req.body;
    const user = (0, db_data_1.authenticate)(email, password);
    if (user) {
        res.status(200).json({ email: user.email });
    }
    else {
        res.sendStatus(403);
    }
}
exports.loginUser = loginUser;
//# sourceMappingURL=login.route.js.map