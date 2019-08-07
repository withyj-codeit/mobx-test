webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/layouts/Navbar.tsx":
/*!*******************************************!*\
  !*** ./src/components/layouts/Navbar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);

 // import CheckAuthState from '../../CheckAuthState'



// interface NFC<Props> extends React.FC<Props> {
//   getInitialProps?: ({req}: { req: any; }) => {
//   }
// }
// interface NFC<Props> extends React.FC<Props> {
//   getInitialProps?: ({req}: { req: any; }) => Promise<{
//     isLoading: boolean;
//     hasErrored: boolean; speakers: any; isServer: boolean;
//   } | {
//     speakers: never[]; hasErrored: boolean; isServer: boolean; errorMessage: any;
//   }>
// }
var Navbar = function Navbar(props) {
  var authStore = props.authStore;
  console.log("Navbar: ", authStore);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "navbar-wrapper"
  }, "Navbar", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, "Login\uC73C\uB85C \uC774\uB3D9"), " ||", react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home"
  }, "Home\uC73C\uB85C \uC774\uB3D9"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "\uD68C\uC6D0\uAC00\uC785"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), "- - - - - - - - - - - - - - -");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["inject"])("authStore")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["observer"])(Navbar)));

/***/ })

})
//# sourceMappingURL=_app.js.85baa7b755ae1011f573.hot-update.js.map