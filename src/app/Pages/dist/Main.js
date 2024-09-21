"use strict";
exports.__esModule = true;
var react_1 = require("react");
var intro_1 = require("../components/intro");
var About_1 = require("../components/About");
var Projects_1 = require("../components/Projects");
var contact_1 = require("../components/contact");
var Main = function () {
    return (react_1["default"].createElement("div", { className: "lg:mx-32 md:mx-4" },
        react_1["default"].createElement(intro_1["default"], null),
        react_1["default"].createElement(About_1["default"], null),
        react_1["default"].createElement(Projects_1["default"], null),
        react_1["default"].createElement(contact_1["default"], null)));
};
exports["default"] = Main;
