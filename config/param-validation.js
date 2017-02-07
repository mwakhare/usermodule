"use strict";
var joi = require("joi");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    createUser: {
        body: {
            username: joi.string().required(),
            mobileNumber: joi.string().regex(/^[1-9][0-9]{9}$/).required()
        }
    },
    updateUser: {
        body: {
            username: joi.string().required(),
            mobileNumber: joi.string().regex(/^[1-9][0-9]{9}$/).required()
        },
        params: {
            userId: joi.string().hex().required()
        }
    },
    login: {
        body: {
            username: joi.string().required(),
            password: joi.string().required()
        }
    },
    register: {
        body: {
            username: joi.string().required(),
            firstname: joi.string().required(),
            lastname: joi.string().required(),
            email: joi.string().email().required(),
            role: joi.number().integer().min(1).max(2),
            password: joi.string().required()
        }
    }
};
//# sourceMappingURL=param-validation.js.map