webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_LoginTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/LoginTemplate */ "./src/components/LoginTemplate.tsx");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");


// login/index.tsx
 // import { inject, observer } from 'mobx-react';



 // import { AuthStore } from '../../src/stores/AuthStore';
// interface Props {
//   authStore?: any
// }

var LoginPage = function LoginPage(_ref) {
  var authStore = _ref.authStore,
      jwt = _ref.jwt;
  authStore.fetch(jwt);
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h1", null, "login index page: ", authStore.userData.email), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_src_components_LoginTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

LoginPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _nextCookie, jwt;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(ctx), jwt = _nextCookie.jwt;
            return _context.abrupt("return", {
              jwt: jwt
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])('authStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(LoginPage)));

/***/ })

})
//# sourceMappingURL=login.js.6f5ed6bbcc8d230d7ffb.hot-update.js.map