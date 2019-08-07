webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/components/LoginTemplate.tsx":
/*!******************************************!*\
  !*** ./src/components/LoginTemplate.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
// src/components/LoginTemplate.tsx



var LoginTemplate = function LoginTemplate(props) {
  var authStore = props.authStore;
  var authData = authStore.authData; // authStore.fetch2()

  var setEmail = function setEmail(e) {
    return authStore.setEmail(e.target.value);
  };

  var setPassword = function setPassword(e) {
    return authStore.setPassword(e.target.value);
  }; // const setUsername = (e) => authStore.setUsername(e.target.value)


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Email:", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "email",
    placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694.",
    value: authData.email,
    onChange: setEmail
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Password:", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
    value: authData.password,
    onChange: setPassword
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: function onClick() {
      return authStore.login();
    }
  }, "login"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "\uC720\uC800\uBA54\uC77C:"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('authStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(LoginTemplate)));

/***/ })

})
//# sourceMappingURL=login.js.5a0b27bce6ea8310357f.hot-update.js.map