'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constant_1 = require("../constants/constant");
var image_1 = require("next/image");
var react_scroll_1 = require("react-scroll");
var Intro = function () {
    return (react_1["default"].createElement("section", { id: constant_1.headerItems.home.page, className: "h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(image_1["default"], { src: constant_1.userInfo.picture, alt: "dp", width: 250, height: 450, className: "rounded-full md:shadow-2xl mt-10" })),
        react_1["default"].createElement("div", { className: 'md:ml-20 sm:ml-12 md:w-1/2' },
            react_1["default"].createElement("h1", { className: "text-7xl uppercase hidden md:block" }, "Web Developer"),
            react_1["default"].createElement("h1", { className: "text-2xl mt-5 md:text-3xl" },
                "Hi, I'm ",
                react_1["default"].createElement("span", { className: "text-purple-900 text-3xl md:text-4xl font-bold" }, constant_1.userInfo.userName)),
            react_1["default"].createElement("p", { className: "mt-4 mb-4 " }, constant_1.userInfo.heading),
            react_1["default"].createElement(react_scroll_1.Link, { to: constant_1.headerItems.projects.page, className: "bg-purple-600 w-28 h-10 text-white rounded cursor-pointer flex items-center justify-center mb-3 space-between", spy: true, smooth: true }, "Projects"),
            react_1["default"].createElement(react_scroll_1.Link, { to: constant_1.headerItems.contact.page, className: "bg-purple-600 w-28 h-10 text-white rounded cursor-pointer flex items-center justify-center space-between", spy: true, smooth: true }, "Contact"))));
};
exports["default"] = Intro;
