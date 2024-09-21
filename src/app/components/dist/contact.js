'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constant_1 = require("../constants/constant");
var image_1 = require("next/image");
var Contact = function () {
    return (react_1["default"].createElement("section", { id: constant_1.headerItems.contact.page, className: "h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(image_1["default"], { src: constant_1.userInfo.picture, alt: "dp", width: 250, height: 450, className: "rounded-full md:shadow-2xl mt-10" })),
        react_1["default"].createElement("div", { className: 'md:ml-20 sm:ml-12 md:w-1/2 text-xl' },
            react_1["default"].createElement("h1", { className: "text-7xl uppercase hidden md:block" }, "Contact"),
            react_1["default"].createElement("p", { className: 'mt-6' },
                " ",
                react_1["default"].createElement("b", null, "Email:"),
                " hayatullahamna@gmail.com"),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("b", null, "Email:"),
                " aftabamna13@gmail.com"),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("b", null, " Whatsapp:"),
                " 0316-2391694"),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("b", null, "Phone No:"),
                " 0316-2391694"),
            react_1["default"].createElement("p", null,
                " ",
                react_1["default"].createElement("b", null, "LinkedIn:"),
                " https://www.linkedin.com/in/amna-aftab-kifayat-81a5822b7/"))));
};
exports["default"] = Contact;
