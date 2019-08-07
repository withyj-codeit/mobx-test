webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/stores/AuthStore.ts":
/*!*********************************!*\
  !*** ./src/stores/AuthStore.ts ***!
  \*********************************/
/*! exports provided: AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);









var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;



var AuthStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function AuthStore(initialData) {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AuthStore);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "token", _descriptor, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "inProgress", _descriptor2, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "authData", _descriptor3, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "userData", _descriptor4, this);

    this.fetch =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(token) {
        var response, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  method: 'get',
                  url: 'http://localhost:8000/api/auth/check',
                  headers: {
                    'jwt': token
                  },
                  withCredentials: true
                });

              case 2:
                response = _context.sent;
                result = response.data.info;
                console.log("result", result);

                _this.setUserData(result);

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

    this.fetch2 =
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                method: 'get',
                url: 'http://localhost:8000/api/auth/check',
                // headers: {'jwt':token},
                withCredentials: true
              });

            case 2:
              response = _context2.sent;
              result = response.data.info;
              console.log("result", result);

              _this.setUserData(result);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    this.userData = initialData.userData; // this.fetch(token)
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthStore, [{
    key: "setToken",
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: "setEmail",
    value: function setEmail(email) {
      this.authData.email = email;
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      this.authData.password = password;
    }
  }, {
    key: "setUsername",
    value: function setUsername(username) {
      this.authData.username = username;
    }
  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default()({
                  method: 'post',
                  url: 'http://localhost:8000/api/auth/login',
                  data: {
                    email: this.authData.email,
                    password: this.authData.password
                  }
                });

              case 2:
                response = _context3.sent;
                Object(mobx__WEBPACK_IMPORTED_MODULE_8__["runInAction"])(function () {
                  document.cookie = "jwt=".concat(response.data.token);
                });
                console.log("token in AuthStore: ", this.token);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }() // 쿠키 속 jwt로 자동 로그인 하는 로직

  }, {
    key: "setUserData",
    value: function setUserData(userData) {
      this.userData.email = userData.email;
      this.userData.username = userData.username;
    } // logout할 때 가지고 있던 쿠키 만료 & 삭제 하는 로직
    // // @action reset() {
    // //   this.authData.email
    // //   this.authData.password
    // //   this.authData.username
    // // }
    // @action async register() {
    //   const response = await axios({
    //     method: 'post',
    //     url: 'http://localhost:8000/api/auth/register',
    //     data: {
    //       email: this.authData.email,
    //       password: this.authData.password,
    //       username: this.authData.username
    //     }
    //   })
    //   // 회원가입하고 쿠키에 토큰 넣는 로직 만들어야 함!!
    //   runInAction(() => {
    //     this.token = response.data.token
    //   })
    // }
    // @action async check() {
    //   const response = await axios({
    //     method: 'get',
    //     url: 'http://localhost:8000/api/auth/check',
    //     headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM2YWQ2NmE5YjI1Njg3NDFhYmY4ODciLCJlbWFpbCI6IndpdGh5akBjb2RlaXQua3IiLCJ1c2VybmFtZSI6Im1hc3RlciIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjM5NTM3NDcsImV4cCI6MTU2NDU1ODU0NywiaXNzIjoiY29kZWl0LmtyIiwic3ViIjoidXNlckluZm8ifQ.QDdr_sA-j2IDoKa9uv3RFSMGUSk3ZKpN4M3EyPWvc8Y'}
    //   })
    //   runInAction(() => {
    //     this.userData.email = response.data.info.email
    //     this.userData.username = response.data.info.username
    //   })
    // }

  }]);

  return AuthStore;
}(), _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "token", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "기본값";
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "inProgress", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "authData", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      email: '',
      password: '',
      username: ''
    };
  }
}), _descriptor4 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "userData", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      email: '',
      username: '',
      userState: ''
    };
  }
}), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setToken", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setToken"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setEmail", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setEmail"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setPassword", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setPassword"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setUsername", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setUsername"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "login", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "login"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "setUserData", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "setUserData"), _class.prototype)), _class);


/***/ })

})
//# sourceMappingURL=_app.js.9b8580f8d4e1b33f3b86.hot-update.js.map