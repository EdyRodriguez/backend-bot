"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_Controller_1 = require("../controllers/user.Controller");
const router = (0, express_1.Router)();
router.get('/', user_Controller_1.getUsers);
router.get('/:id', user_Controller_1.getUser);
router.post('/', user_Controller_1.postUser);
router.put('/:id', user_Controller_1.putUser);
router.delete('/:id', user_Controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.Routes.js.map