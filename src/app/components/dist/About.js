"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constant_1 = require("../constants/constant");
var image_1 = require("next/image");
var About = function () {
    return (react_1["default"].createElement("section", { id: constant_1.headerItems.about.page, className: "h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start" },
        react_1["default"].createElement("div", { className: ' m-4 md:ml-20 sm:ml-12 md:w-1/2' },
            react_1["default"].createElement("h1", { className: "text-6xl my-6 " }, "About"),
            react_1["default"].createElement("h2", { className: "text-2xl mt-5 md:text-3xl" },
                react_1["default"].createElement("span", { className: "text-purple-900 text-3xl my-4 font-bold" }, "Get to know me!")),
            react_1["default"].createElement("p", { className: "mt-4 mb-4 " }, constant_1.userInfo.about)),
        react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center text-center" },
            react_1["default"].createElement(image_1["default"], { src: constant_1.userInfo.picture, alt: "dp", width: 250, height: 450, className: "m-auto" }),
            react_1["default"].createElement("div", { className: "mt-3 w-3/4 break-words" }, constant_1.userInfo.skills.map(function (skill) { return (react_1["default"].createElement("span", { className: 'bg-gray-200 m-1 p-2 text-sm inline-block rounded-md' }, skill)); })))));
};
exports["default"] = About;
