"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constant_1 = require("../constants/constant");
var image_1 = require("next/image");
var constant_2 = require("../constants/constant");
var Projects = function () {
    return (react_1["default"].createElement("section", { id: constant_1.headerItems.projects.page, className: "h-screen flex flex-col text-center justify-center items-center my-40" },
        react_1["default"].createElement("h1", { className: "text-6xl my-6 " }, "Projects"),
        react_1["default"].createElement("div", { className: "flex flex-wrap justify-center items-center text-center mt-3  break-words" }, Object.keys(constant_2.projects).map(function (project) { return (react_1["default"].createElement(image_1["default"], { src: constant_2.projects[project].image, alt: "", width: 300, height: 250, className: ' mt-4 p-2' })); }))));
};
exports["default"] = Projects;
