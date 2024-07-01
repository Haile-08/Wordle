"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const score_routes_1 = __importDefault(require("./score.routes")); // Assuming this is a TypeScript file
const word_routes_1 = __importDefault(require("./word.routes")); // Assuming this is a TypeScript file
/**
 * Route handler to add routes to the Express application
 * @param app Express app instance
 */
const expressRouteHandler = (app) => {
    const router = (0, express_1.Router)();
    // API versioning
    app.use('/v1', router);
    // Register route handlers
    (0, word_routes_1.default)(router);
    (0, score_routes_1.default)(router);
};
exports.default = expressRouteHandler;
