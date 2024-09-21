'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constant_1 = require("../constants/constant");
var bi_1 = require("react-icons/bi");
var react_scroll_1 = require("react-scroll");
var Header = function () {
    var _a = react_1.useState(false), navItem = _a[0], showNavItems = _a[1];
    return (react_1["default"].createElement("header", { className: 'bg-white p-6 md:flex justify-between w-full fixed top-0 z-10' },
        react_1["default"].createElement("div", { className: "flex justify-between" },
            react_1["default"].createElement("h2", { className: 'text-2xl font-bold' }, constant_1.userInfo.name),
            react_1["default"].createElement(bi_1.BiMenu, { size: 30, className: "md:hidden", onClick: function () { return showNavItems(function (prevState) { return !prevState; }); } })),
        react_1["default"].createElement("div", { className: "mr-8 md:space-x-6 mt-6 md:mt-0  md:block " + (navItem ? 'block' : 'hidden') }, Object.keys(constant_1.headerItems).map(function (item) { return (react_1["default"].createElement(react_scroll_1.Link, { to: constant_1.headerItems[item].page, key: constant_1.headerItems[item].label, className: " block md:inline-block cursor-pointer", spy: true, smooth: true }, constant_1.headerItems[item].label)); }))));
};
exports["default"] = Header;
