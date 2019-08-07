webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/stores/UtilStore.ts":
/*!*********************************!*\
  !*** ./src/stores/UtilStore.ts ***!
  \*********************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _AuthStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthStore */ "./src/stores/AuthStore.ts");

/* Server-Side-Render할 store 파일들을 import 합니다 */


var isServer = "object" === 'undefined';
Object(mobx_react__WEBPACK_IMPORTED_MODULE_0__["useStaticRendering"])(isServer);
var stores = null;

function initializeStore() {
  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    authStore: {}
  };
  console.log("token in UtilStore: ", initialData);

  if (isServer) {
    return {
      authStore: new _AuthStore__WEBPACK_IMPORTED_MODULE_1__["AuthStore"](initialData.authStore)
    };
  }

  if (stores === null) {
    stores = {
      authStore: new _AuthStore__WEBPACK_IMPORTED_MODULE_1__["AuthStore"](initialData.authStore)
    };
  }

  return stores;
}



/***/ })

})
//# sourceMappingURL=_app.js.46aedc9ea1f62301a71d.hot-update.js.map