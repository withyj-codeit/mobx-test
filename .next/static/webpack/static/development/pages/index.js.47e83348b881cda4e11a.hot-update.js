webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);


// pages/index.tsx



var MainPage = function MainPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), "\uBA54\uC778 index \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4!!", react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), props.authStore.userData.email, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("br", null));
};

MainPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var isServer, _nextCookie, jwt;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isServer = "object" == 'undefined';

            if (!isServer) {
              _context.next = 5;
              break;
            }

            _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx), jwt = _nextCookie.jwt;
            _context.next = 5;
            return ctx.mobxStore.authStore.fetch(jwt);

          case 5:
            return _context.abrupt("return", {
              authStore: ctx.mobxStore.authStore
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ })

})
//# sourceMappingURL=index.js.47e83348b881cda4e11a.hot-update.js.map