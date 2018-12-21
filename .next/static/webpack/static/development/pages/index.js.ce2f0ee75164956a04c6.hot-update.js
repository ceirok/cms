webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout/Sidenav/UserRole.js":
/*!***********************************************!*\
  !*** ./components/Layout/Sidenav/UserRole.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./components/config/config.js");
var _jsxFileName = "/Users/ceirokilp/Sites/react/cms/components/Layout/Sidenav/UserRole.js";




var UserRole = function UserRole() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].userRoles.map(function (user) {
      return {
        value: user.id,
        label: "".concat(user.userName, " (").concat(user.userRole, ")")
      };
    }),
    value: _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].userRoles[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserRole);

/***/ })

})
//# sourceMappingURL=index.js.ce2f0ee75164956a04c6.hot-update.js.map