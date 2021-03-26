(this["webpackJsonpview-statements-mf"] = this["webpackJsonpview-statements-mf"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/index.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/assets/sass/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0; }\n\n.list-item {\n  display: inline-block;\n  position: relative; }\n  .list-item #my-counter {\n    background: white;\n    border: 2px solid #0e6837;\n    border-radius: 0.9em;\n    color: #0e6837;\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.6em;\n    margin-right: 5px;\n    text-align: center;\n    width: 1.8em;\n    position: absolute;\n    left: -15px;\n    top: -13px; }\n    @media screen and (max-width: 1024px) and (min-width: 320px) and (orientation: portrait) {\n      .list-item #my-counter {\n        line-height: 1em;\n        width: 1.1em;\n        top: -11px; } }\n  .list-item:hover {\n    cursor: pointer; }\n\n.my-table {\n  font-size: 14px; }\n  .my-table .table {\n    min-height: 400px;\n    text-align: center; }\n    .my-table .table thead tr th {\n      vertical-align: middle;\n      height: 54px;\n      background: #d6e291;\n      color: #15840c;\n      font-weight: 500;\n      font-size: 18px; }\n    .my-table .table tbody tr {\n      cursor: pointer; }\n      .my-table .table tbody tr td {\n        vertical-align: middle;\n        height: 70px;\n        font-weight: 500; }\n  .my-table .paginator .pagination {\n    justify-content: center; }\n\n.my-modal .modal-footer button {\n  background-color: #d8eaa0 !important;\n  color: #15840c !important;\n  border: 0; }\n\n.my-modal .select-range {\n  border: none;\n  border-bottom: 1px solid #c7c7c7;\n  color: #c7c7c7;\n  margin: auto 1rem;\n  height: 25px;\n  font-size: 13px; }\n  .my-modal .select-range:focus {\n    outline: none; }\n\n.my-modal .search-input {\n  border: 1px solid #ced4da;\n  position: absolute;\n  width: 25%;\n  right: calc(60px + 1rem);\n  height: 33px;\n  font-size: 14px; }\n  @media (max-width: 1024px) and (min-width: 320px) and (orientation: portrait) {\n    .my-modal .search-input {\n      top: 105px;\n      width: 63%; } }\n\n.my-modal .search-button {\n  background: #c0e570;\n  border: none;\n  color: #0e6837;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  width: 60px;\n  text-transform: capitalize;\n  padding: 0.1em;\n  height: 33px;\n  margin: 0 1rem;\n  position: absolute;\n  right: 0; }\n  @media (max-width: 1024px) and (min-width: 320px) and (orientation: portrait) {\n    .my-modal .search-button {\n      top: 105px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icon */ "./src/components/Icon.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Title */ "./src/components/Title.js");
/* harmony import */ var components_Counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Counter */ "./src/components/Counter.js");
/* harmony import */ var components_modal_MyModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modal/MyModal */ "./src/components/modal/MyModal.js");










var App = /*#__PURE__*/function (_React$PureComponent) {
  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _React$PureComponent);

  var _super = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(App);

  function App() {
    Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          modalOpen = _this$props.modalOpen,
          toggleModal = _this$props.toggleModal,
          data = _this$props.data,
          putDocumentRead = _this$props.putDocumentRead,
          onChangeDescription = _this$props.onChangeDescription,
          onChangeRangeFilter = _this$props.onChangeRangeFilter;

      var getUnreadData = function getUnreadData() {
        var i = 0;
        data.forEach(function (d) {
          if (!d.read) {
            // eslint-disable-next-line no-plusplus
            i++;
          }
        });
        return i;
      };

      var changeDescription = function changeDescription(description) {
        onChangeDescription(description);
      };

      var changeRangeFilter = function changeRangeFilter(range) {
        onChangeRangeFilter(range);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "list-item",
        onClick: Array.isArray(data) && data.length ? function () {
          return toggleModal();
        } : null
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: icon
      }), " ", title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: title
      }), ' ', data && data.length > 0 && getUnreadData() !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Counter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        count: getUnreadData()
      }) : null), data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_modal_MyModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "my-modal",
        isOpen: modalOpen,
        toggle: toggleModal,
        title: title,
        data: data,
        putDocumentRead: putDocumentRead,
        changeDescription: changeDescription,
        changeRangeFilter: changeRangeFilter
      }) : null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent);

App.defaultProps = {
  icon: '',
  iconStyle: {},
  countStyle: {},
  title: '',
  titleStyle: {},
  data: []
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/AppContainer.js":
/*!*****************************!*\
  !*** ./src/AppContainer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App */ "./src/App.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var components_types_keycloak__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/__types__/keycloak */ "./src/components/__types__/keycloak.js");
/* harmony import */ var auth_KeycloakContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! auth/KeycloakContext */ "./src/auth/KeycloakContext.js");
/* harmony import */ var auth_KeycloakViews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! auth/KeycloakViews */ "./src/auth/KeycloakViews.js");
/* harmony import */ var components_common_Notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/common/Notification */ "./src/components/common/Notification.js");
/* harmony import */ var api_apiHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! api/apiHandler */ "./src/api/apiHandler.js");

















var AppContainer = /*#__PURE__*/function (_React$PureComponent) {
  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppContainer, _React$PureComponent);

  var _super = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(AppContainer);

  function AppContainer(props) {
    var _this;

    Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AppContainer);

    _this = _super.call(this, props);

    _this.onMount = function () {
      var _this$props = _this.props,
          icon = _this$props.icon,
          onError = _this$props.onError,
          t = _this$props.t,
          keycloak = _this$props.keycloak;
      var _this$state = _this.state,
          descriptionFilter = _this$state.descriptionFilter,
          rangeFilter = _this$state.rangeFilter;
      var apiCall = Object(api_apiHandler__WEBPACK_IMPORTED_MODULE_15__["getApiContext"])(icon);
      var authenticated = keycloak.initialized && keycloak.authenticated;
      var userId = keycloak.idTokenParsed.preferred_username;
      var filters = [{
        field: 'userId',
        operator: 'equals',
        value: userId
      }];

      if (descriptionFilter) {
        filters.push({
          field: 'description',
          operator: 'contains',
          value: descriptionFilter
        });
      }

      if (rangeFilter) {
        filters.push({
          field: 'createdAt',
          operator: 'lessThanOrEqual',
          value: rangeFilter.dateB
        });
        filters.push({
          field: 'createdAt',
          operator: 'greaterThanOrEqual',
          value: rangeFilter.dateA
        });
      }

      var requestParameters = {
        filters: filters // ...{
        //   pagination: {
        //     page: pagination.currentPage,
        //     rowsPerPage: pagination.itemsPerPage,
        //   },
        // },

      };

      if (authenticated) {
        if (userId) {
          apiCall(requestParameters).then(function (response) {
            var data = response.data;
            var sortData = data.slice().sort(function (a, b) {
              var aDate = new Date(a.createdAt);
              var bDate = new Date(b.createdAt);
              var rv = bDate - aDate;

              if (rv === 0) {
                rv = a.description.localeCompare(b.description);
              }

              return rv; // return new Date(b.createdAt) - new Date(a.createdAt);
            });

            _this.setState({
              data: sortData
            });
          }).catch(function (e) {
            onError(e);

            _this.setState({
              notificationStatus: components_common_Notification__WEBPACK_IMPORTED_MODULE_14__["default"].ERROR,
              notificationMessage: t('common.couldNotFetchData')
            });
          }).finally(function () {
            return _this.setState({
              loading: false
            });
          });
        } else {
          _this.setState({
            loading: false,
            notificationStatus: components_common_Notification__WEBPACK_IMPORTED_MODULE_14__["default"].ERROR,
            notificationMessage: t('common.missingId')
          });
        }
      }
    };

    _this.state = {
      modalOpen: false,
      loading: true,
      notificationStatus: null,
      notificationMessage: null,
      descriptionFilter: null,
      rangeFilter: null
    };
    _this.toggleModal = _this.toggleModal.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.putDocumentRead = _this.putDocumentRead.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.closeNotification = _this.closeNotification.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeDescription = _this.onChangeDescription.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeRangeFilter = _this.onChangeRangeFilter.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AppContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var keycloak = this.props.keycloak;
      var authenticated = keycloak.initialized && keycloak.authenticated;

      if (authenticated) {
        this.onMount();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var keycloak = this.props.keycloak;
      var _this$state2 = this.state,
          descriptionFilter = _this$state2.descriptionFilter,
          rangeFilter = _this$state2.rangeFilter;
      var authenticated = keycloak.initialized && keycloak.authenticated;
      var changedAuth = prevProps.keycloak.authenticated !== authenticated;
      var changedDescriptionFilter = prevState.descriptionFilter !== descriptionFilter;
      var changedRangeFilter = prevState.rangeFilter !== rangeFilter;

      if (authenticated && (changedAuth || changedDescriptionFilter || changedRangeFilter)) {
        this.onMount();
      }
    }
  }, {
    key: "onChangeDescription",
    value: function onChangeDescription(description) {
      this.setState({
        descriptionFilter: description
      });
    }
  }, {
    key: "onChangeRangeFilter",
    value: function onChangeRangeFilter(range) {
      this.setState({
        rangeFilter: range
      });
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      this.setState({
        notificationStatus: null,
        notificationMessage: null
      });
    }
  }, {
    key: "putDocumentRead",
    value: function () {
      var _putDocumentRead = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(document) {
        var _this$props2, icon, t, apiCall, updated;

        return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, icon = _this$props2.icon, t = _this$props2.t;
                apiCall = Object(api_apiHandler__WEBPACK_IMPORTED_MODULE_15__["putApiContext"])(icon);
                _context.prev = 2;
                _context.next = 5;
                return apiCall(document);

              case 5:
                updated = _context.sent;
                if (updated) this.onMount();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                this.setState({
                  notificationStatus: components_common_Notification__WEBPACK_IMPORTED_MODULE_14__["default"].ERROR,
                  notificationMessage: t('common.couldNotFetchData')
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function putDocumentRead(_x) {
        return _putDocumentRead.apply(this, arguments);
      }

      return putDocumentRead;
    }()
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState(function (prevState) {
        return {
          modalOpen: !prevState.modalOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          icon = _this$props3.icon,
          title = _this$props3.title,
          keycloak = _this$props3.keycloak,
          t = _this$props3.t;
      var _this$state3 = this.state,
          modalOpen = _this$state3.modalOpen,
          data = _this$state3.data,
          loading = _this$state3.loading,
          notificationStatus = _this$state3.notificationStatus,
          notificationMessage = _this$state3.notificationMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: this.theme
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(auth_KeycloakViews__WEBPACK_IMPORTED_MODULE_13__["UnauthenticatedView"], {
        keycloak: keycloak
      }, t('common.notAuthenticated')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(auth_KeycloakViews__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedView"], {
        keycloak: keycloak
      }, loading && t('common.loading'), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App__WEBPACK_IMPORTED_MODULE_8__["default"], {
        icon: icon,
        title: title,
        modalOpen: modalOpen,
        toggleModal: this.toggleModal,
        data: data,
        putDocumentRead: this.putDocumentRead,
        onChangeDescription: this.onChangeDescription,
        onChangeRangeFilter: this.onChangeRangeFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_common_Notification__WEBPACK_IMPORTED_MODULE_14__["default"], {
        status: notificationStatus,
        message: notificationMessage,
        onClose: this.closeNotification
      }));
    }
  }]);

  return AppContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

AppContainer.defaultProps = {
  icon: '',
  title: '',
  onError: function onError() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(auth_KeycloakContext__WEBPACK_IMPORTED_MODULE_12__["withKeycloak"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["withTranslation"])()(AppContainer)));

/***/ }),

/***/ "./src/api/alerts/alerts.js":
/*!**********************************!*\
  !*** ./src/api/alerts/alerts.js ***!
  \**********************************/
/*! exports provided: getFilterQuery, apiAlertsGet, apiAlertsPut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return getFilterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAlertsGet", function() { return apiAlertsGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAlertsPut", function() { return apiAlertsPut; });
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/constants */ "./src/api/constants.js");






var getKeycloakToken = function getKeycloakToken() {
  if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
    return window.entando.keycloak.token;
  }

  return '';
};

var getDefaultOptions = function getDefaultOptions() {
  return {
    headers: new Headers({
      Authorization: "Bearer ".concat(getKeycloakToken()),
      'Content-Type': 'application/json'
    })
  };
};

var resource = 'alerts';

var request = /*#__PURE__*/function () {
  var _ref = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url, options) {
    var response, headers;
    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, options);

          case 2:
            response = _context.sent;
            headers = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, response.headers.has('X-Total-Count') ? {
              'X-Total-Count': parseInt(response.headers.get('X-Total-Count'), 10)
            } : {});

            if (!(response.status >= 200 && response.status < 300)) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            _context.t1 = _context.sent;
            _context.t2 = headers;
            _context.t0 = {
              data: _context.t1,
              headers: _context.t2
            };
            _context.next = 13;
            break;

          case 12:
            _context.t0 = Promise.reject(new Error(response.statusText || response.status));

          case 13:
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getFilterQuery = function getFilterQuery() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (filters.length) {
    return filters.filter(function (f) {
      return f.field && f.operator;
    }).reduce(function (acc, f) {
      switch (f.operator) {
        case 'specified':
          return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".specified")), "=true")]);

        case 'unspecified':
          return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".specified")), "=false")]);

        default:
      }

      return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".").concat(f.operator)), "=").concat(encodeURIComponent(f.value))]);
    }, []).join('&');
  }

  return '';
};

var getUrl = function getUrl(url) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var hasQuery = !!(filters || pagination);
  var parameters = "".concat(filters).concat(filters ? '&' : '').concat(pagination);
  return "".concat(url).concat(hasQuery ? "?".concat(parameters) : '');
};

var apiAlertsGet = /*#__PURE__*/function () {
  var _ref3 = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var _ref2$filters, filters, pagination, filterQuery, paginationQuery, url, options;

    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$filters = _ref2.filters, filters = _ref2$filters === void 0 ? [] : _ref2$filters, pagination = _ref2.pagination;
            // const { userId } = params;
            filterQuery = getFilterQuery(filters);
            paginationQuery = pagination ? "page=".concat(pagination.page, "&size=").concat(pagination.rowsPerPage) : '';
            url = getUrl("".concat(Object(api_constants__WEBPACK_IMPORTED_MODULE_4__["getServiceURL"])(), "/").concat(resource), filterQuery, paginationQuery);
            options = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDefaultOptions(), {
              method: 'GET'
            });
            return _context2.abrupt("return", request(url, options));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function apiAlertsGet(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var apiAlertsPut = /*#__PURE__*/function () {
  var _ref4 = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(statement) {
    var url, options;
    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(Object(api_constants__WEBPACK_IMPORTED_MODULE_4__["getServiceURL"])(), "/").concat(resource);
            options = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDefaultOptions(), {
              method: 'PUT',
              body: statement ? JSON.stringify(statement) : null
            });
            return _context3.abrupt("return", request(url, options));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function apiAlertsPut(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/apiHandler.js":
/*!*******************************!*\
  !*** ./src/api/apiHandler.js ***!
  \*******************************/
/*! exports provided: apiList, getApiContext, putApiContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiList", function() { return apiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiContext", function() { return getApiContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putApiContext", function() { return putApiContext; });
/* harmony import */ var api_statements_statements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/statements/statements */ "./src/api/statements/statements.js");
/* harmony import */ var api_alerts_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/alerts/alerts */ "./src/api/alerts/alerts.js");


var apiList = {
  viewStatements: 'viewstatements',
  manageAlerts: 'managealerts'
};
var getApiContext = function getApiContext(apiToCall) {
  var api;

  switch (apiToCall) {
    case apiList.viewStatements:
      {
        api = api_statements_statements__WEBPACK_IMPORTED_MODULE_0__["apiStatementsGet"];
        break;
      }

    case apiList.manageAlerts:
      {
        api = api_alerts_alerts__WEBPACK_IMPORTED_MODULE_1__["apiAlertsGet"];
        break;
      }

    default:
      {
        api = new Error("Error! Unknown api :".concat(apiToCall));
      }
  }

  return api;
};
var putApiContext = function putApiContext(apiToCall) {
  var api;

  switch (apiToCall) {
    case apiList.viewStatements:
      {
        api = api_statements_statements__WEBPACK_IMPORTED_MODULE_0__["apiStatementPut"];
        break;
      }

    case apiList.manageAlerts:
      {
        api = api_alerts_alerts__WEBPACK_IMPORTED_MODULE_1__["apiAlertsPut"];
        break;
      }

    default:
      {
        api = new Error("Error! Unknown api :".concat(apiToCall));
      }
  }

  return api;
};

/***/ }),

/***/ "./src/api/constants.js":
/*!******************************!*\
  !*** ./src/api/constants.js ***!
  \******************************/
/*! exports provided: DOMAIN, setServiceURL, getServiceURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServiceURL", function() { return setServiceURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceURL", function() { return getServiceURL; });
/* eslint-disable-next-line import/prefer-default-export */
var DOMAIN = Object({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined}).REACT_APP_DOMAIN;
var SERVICE_URL;
function setServiceURL(serviceURL) {
  SERVICE_URL = serviceURL;
}
function getServiceURL() {
  return SERVICE_URL;
}

/***/ }),

/***/ "./src/api/statements/statements.js":
/*!******************************************!*\
  !*** ./src/api/statements/statements.js ***!
  \******************************************/
/*! exports provided: getFilterQuery, apiStatementsGet, apiStatementPut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return getFilterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiStatementsGet", function() { return apiStatementsGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiStatementPut", function() { return apiStatementPut; });
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api/constants */ "./src/api/constants.js");






var getKeycloakToken = function getKeycloakToken() {
  if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
    return window.entando.keycloak.token;
  }

  return '';
};

var getDefaultOptions = function getDefaultOptions() {
  return {
    headers: new Headers({
      Authorization: "Bearer ".concat(getKeycloakToken()),
      'Content-Type': 'application/json'
    })
  };
};

var resource = 'statements';

var request = /*#__PURE__*/function () {
  var _ref = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url, options) {
    var response, headers;
    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, options);

          case 2:
            response = _context.sent;
            headers = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, response.headers.has('X-Total-Count') ? {
              'X-Total-Count': parseInt(response.headers.get('X-Total-Count'), 10)
            } : {});

            if (!(response.status >= 200 && response.status < 300)) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            _context.t1 = _context.sent;
            _context.t2 = headers;
            _context.t0 = {
              data: _context.t1,
              headers: _context.t2
            };
            _context.next = 13;
            break;

          case 12:
            _context.t0 = Promise.reject(new Error(response.statusText || response.status));

          case 13:
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getFilterQuery = function getFilterQuery() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (filters.length) {
    return filters.filter(function (f) {
      return f.field && f.operator;
    }).reduce(function (acc, f) {
      switch (f.operator) {
        case 'specified':
          return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".specified")), "=true")]);

        case 'unspecified':
          return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".specified")), "=false")]);

        default:
      }

      return [].concat(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), ["".concat(encodeURIComponent("".concat(f.field, ".").concat(f.operator)), "=").concat(encodeURIComponent(f.value))]);
    }, []).join('&');
  }

  return '';
};

var getUrl = function getUrl(url) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var hasQuery = !!(filters || pagination);
  var parameters = "".concat(filters).concat(filters ? '&' : '').concat(pagination);
  return "".concat(url).concat(hasQuery ? "?".concat(parameters) : '');
};

var apiStatementsGet = /*#__PURE__*/function () {
  var _ref3 = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
    var _ref2$filters, filters, pagination, filterQuery, paginationQuery, url, options;

    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref2$filters = _ref2.filters, filters = _ref2$filters === void 0 ? [] : _ref2$filters, pagination = _ref2.pagination;
            // const { userId } = params;
            filterQuery = getFilterQuery(filters);
            paginationQuery = pagination ? "page=".concat(pagination.page, "&size=").concat(pagination.rowsPerPage) : '';
            url = getUrl("".concat(Object(api_constants__WEBPACK_IMPORTED_MODULE_4__["getServiceURL"])(), "/").concat(resource), filterQuery, paginationQuery);
            options = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDefaultOptions(), {
              method: 'GET'
            });
            return _context2.abrupt("return", request(url, options));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function apiStatementsGet(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var apiStatementPut = /*#__PURE__*/function () {
  var _ref4 = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(statement) {
    var url, options;
    return _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(Object(api_constants__WEBPACK_IMPORTED_MODULE_4__["getServiceURL"])(), "/").concat(resource);
            options = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDefaultOptions(), {
              method: 'PUT',
              body: statement ? JSON.stringify(statement) : null
            });
            return _context3.abrupt("return", request(url, options));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function apiStatementPut(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/assets/pdf/Entando_Development_Methodology.pdf":
/*!************************************************************!*\
  !*** ./src/assets/pdf/Entando_Development_Methodology.pdf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Entando_Development_Methodology.dc5129ba.pdf";

/***/ }),

/***/ "./src/assets/sass/index.scss":
/*!************************************!*\
  !*** ./src/assets/sass/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/sass/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/svg/investments.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/investments.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/investments.e40160bb.svg";

/***/ }),

/***/ "./src/assets/svg/managealerts.svg":
/*!*****************************************!*\
  !*** ./src/assets/svg/managealerts.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/managealerts.c93a3064.svg";

/***/ }),

/***/ "./src/assets/svg/paybills.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/paybills.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/paybills.955e0527.svg";

/***/ }),

/***/ "./src/assets/svg/sendmoney.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/sendmoney.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sendmoney.e86b26c5.svg";

/***/ }),

/***/ "./src/assets/svg/svg.js":
/*!*******************************!*\
  !*** ./src/assets/svg/svg.js ***!
  \*******************************/
/*! exports provided: getSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvg", function() { return getSvg; });
/* harmony import */ var assets_svg_investments_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/svg/investments.svg */ "./src/assets/svg/investments.svg");
/* harmony import */ var assets_svg_investments_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_svg_investments_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_svg_managealerts_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/svg/managealerts.svg */ "./src/assets/svg/managealerts.svg");
/* harmony import */ var assets_svg_managealerts_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_svg_managealerts_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_svg_paybills_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/svg/paybills.svg */ "./src/assets/svg/paybills.svg");
/* harmony import */ var assets_svg_paybills_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_svg_paybills_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_svg_sendmoney_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/svg/sendmoney.svg */ "./src/assets/svg/sendmoney.svg");
/* harmony import */ var assets_svg_sendmoney_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_svg_sendmoney_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_svg_transfermoney_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/svg/transfermoney.svg */ "./src/assets/svg/transfermoney.svg");
/* harmony import */ var assets_svg_transfermoney_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_svg_transfermoney_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_svg_viewstatements_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/svg/viewstatements.svg */ "./src/assets/svg/viewstatements.svg");
/* harmony import */ var assets_svg_viewstatements_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_svg_viewstatements_svg__WEBPACK_IMPORTED_MODULE_5__);






var svgTypes = {
  investments: 'investments',
  managealerts: 'managealerts',
  paybills: 'paybills',
  sendmoney: 'sendmoney',
  transfermoney: 'transfermoney',
  viewstatements: 'viewstatements'
};
var svg = {
  investments: assets_svg_investments_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  managealerts: assets_svg_managealerts_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  paybills: assets_svg_paybills_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  sendmoney: assets_svg_sendmoney_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  transfermoney: assets_svg_transfermoney_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  viewstatements: assets_svg_viewstatements_svg__WEBPACK_IMPORTED_MODULE_5___default.a
}; // eslint-disable-next-line import/prefer-default-export

var getSvg = function getSvg(icon) {
  switch (icon) {
    case svgTypes.investments:
      return svg.investments;

    case svgTypes.managealerts:
      return svg.managealerts;

    case svgTypes.paybills:
      return svg.paybills;

    case svgTypes.sendmoney:
      return svg.sendmoney;

    case svgTypes.transfermoney:
      return svg.transfermoney;

    case svgTypes.viewstatements:
      return svg.viewstatements;

    default:
      return null;
  }
};

/***/ }),

/***/ "./src/assets/svg/transfermoney.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/transfermoney.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/transfermoney.98b87291.svg";

/***/ }),

/***/ "./src/assets/svg/viewstatements.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/viewstatements.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/viewstatements.7aebe259.svg";

/***/ }),

/***/ "./src/auth/KeycloakContext.js":
/*!*************************************!*\
  !*** ./src/auth/KeycloakContext.js ***!
  \*************************************/
/*! exports provided: KeycloakContext, withKeycloak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakContext", function() { return KeycloakContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withKeycloak", function() { return withKeycloak; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var KeycloakContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function withKeycloak(WrappedComponent) {
  return function ComponentWithKeycloak(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KeycloakContext.Consumer, null, function (value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, props, {
        keycloak: value
      }));
    });
  };
}

/***/ }),

/***/ "./src/auth/KeycloakViews.js":
/*!***********************************!*\
  !*** ./src/auth/KeycloakViews.js ***!
  \***********************************/
/*! exports provided: AuthenticatedView, UnauthenticatedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedView", function() { return AuthenticatedView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedView", function() { return UnauthenticatedView; });
var AuthenticatedView = function AuthenticatedView(_ref) {
  var children = _ref.children,
      keycloak = _ref.keycloak;
  var authenticated = keycloak.initialized && keycloak.authenticated;
  return authenticated ? children : null;
};
var UnauthenticatedView = function UnauthenticatedView(_ref2) {
  var children = _ref2.children,
      keycloak = _ref2.keycloak;
  var authenticated = keycloak.initialized && keycloak.authenticated;
  return !authenticated ? children : null;
};

/***/ }),

/***/ "./src/components/Counter.js":
/*!***********************************!*\
  !*** ./src/components/Counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Counter = function Counter(_ref) {
  var count = _ref.count,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "my-counter",
    className: className,
    style: style
  }, count);
};

Counter.defaultProps = {
  className: '',
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/components/Icon.js":
/*!********************************!*\
  !*** ./src/components/Icon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_svg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/svg/svg */ "./src/assets/svg/svg.js");



var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      style = _ref.style;
  var imgSrc = "/entando-de-app/cmsresources/seed-lambda-statements-alerts-bundle/widgets/view-statements-mf".concat(Object(assets_svg_svg__WEBPACK_IMPORTED_MODULE_1__["getSvg"])(icon));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "my-icon",
    src: imgSrc,
    style: style,
    className: className,
    alt: "icon"
  });
};

Icon.defaultProps = {
  className: '',
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title(_ref) {
  var title = _ref.title,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "my-title",
    className: className,
    style: style
  }, title);
};

Title.defaultProps = {
  className: '',
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/__types__/keycloak.js":
/*!**********************************************!*\
  !*** ./src/components/__types__/keycloak.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var keycloakType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  initialized: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  authenticated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});
/* harmony default export */ __webpack_exports__["default"] = (keycloakType);

/***/ }),

/***/ "./src/components/common/Notification.js":
/*!***********************************************!*\
  !*** ./src/components/common/Notification.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);











var styles = function styles(theme) {
  return {
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      fontSize: 20
    },
    iconStatus: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    success: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["green"][600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

var statusIcon = {
  success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_8___default.a,
  error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default.a,
  info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_7___default.a
};
var autoHideDurations = {
  success: 3000,
  error: null,
  info: 5000
};

var Notification = function Notification(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      passedStatus = _ref.status,
      message = _ref.message,
      onClose = _ref.onClose;
  var isOpen = !!message;
  var status = passedStatus || Notification.INFO;
  var Icon = statusIcon[status];
  var autoHideDuration = autoHideDurations[status];
  var messageTemplate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.message
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.icon, classes.iconStatus)
  }), message);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    open: isOpen,
    onClose: onClose,
    autoHideDuration: autoHideDuration
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SnackbarContent"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes[status], className),
    message: messageTemplate,
    action: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "close",
      "aria-label": "close",
      color: "inherit",
      onClick: onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.icon
    }))]
  }));
};

Notification.SUCCESS = 'success';
Notification.ERROR = 'error';
Notification.INFO = 'info';
Notification.defaultProps = {
  message: null,
  className: '',
  status: Notification.INFO,
  onClose: function onClose() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
})(Notification));

/***/ }),

/***/ "./src/components/filters/utils.js":
/*!*****************************************!*\
  !*** ./src/components/filters/utils.js ***!
  \*****************************************/
/*! exports provided: parseDateToString, getStartMonthFromDate, getDateFromRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateToString", function() { return parseDateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartMonthFromDate", function() { return getStartMonthFromDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFromRange", function() { return getDateFromRange; });
/**
 * from Date format to yyyy-MM-dd format
 */
var parseDateToString = function parseDateToString(_ref) {
  var date = _ref.date;
  return date.toISOString().substring(0, 10);
};
/**
 * return the first day of month from a date (ISO FORMAT without time)
 */

var getStartMonthFromDate = function getStartMonthFromDate(_ref2) {
  var d = _ref2.d;
  var date = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours());
  return parseDateToString({
    date: date
  });
};
/**
 * return the date starting from a date d and back to 'range' days (ISO FORMAT without time)
 */

var getDateFromRange = function getDateFromRange(_ref3) {
  var d = _ref3.d,
      range = _ref3.range;
  var date = new Date();
  date.setDate(d.getDate() - range);
  return parseDateToString({
    date: date
  });
};

/***/ }),

/***/ "./src/components/modal/MyModal.js":
/*!*****************************************!*\
  !*** ./src/components/modal/MyModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_table_MyTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/MyTable */ "./src/components/table/MyTable.js");
/* harmony import */ var components_filters_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/filters/utils */ "./src/components/filters/utils.js");










var MyModal = /*#__PURE__*/function (_Component) {
  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyModal, _Component);

  var _super = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MyModal);

  function MyModal(props) {
    var _this;

    Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyModal);

    _this = _super.call(this, props);
    _this.state = {
      descriptionFilter: ''
    };
    _this.onChangeDescription = _this.onChangeDescription.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.filterByDescription = _this.filterByDescription.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.onChangeRangeFilter = _this.onChangeRangeFilter.bind(Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyModal, [{
    key: "onChangeDescription",
    value: function onChangeDescription(evt) {
      var newDescription;
      if (evt && evt.target) newDescription = evt.target.value;
      this.setState({
        descriptionFilter: newDescription
      });
    }
  }, {
    key: "onChangeRangeFilter",
    value: function onChangeRangeFilter(evt) {
      var changeRangeFilter = this.props.changeRangeFilter;
      var newRangeFilter;
      if (evt && evt.target) newRangeFilter = evt.target.value;
      var today = new Date();
      var dateA = Object(components_filters_utils__WEBPACK_IMPORTED_MODULE_8__["parseDateToString"])({
        date: today
      });
      var dateB = Object(components_filters_utils__WEBPACK_IMPORTED_MODULE_8__["parseDateToString"])({
        date: today
      });
      var range = {
        dateA: dateA,
        dateB: dateB
      };

      switch (newRangeFilter) {
        case '90':
          {
            dateA = Object(components_filters_utils__WEBPACK_IMPORTED_MODULE_8__["getDateFromRange"])({
              d: today,
              range: 90
            });
            range.dateA = dateA;
            break;
          }

        case 'month':
          {
            dateA = Object(components_filters_utils__WEBPACK_IMPORTED_MODULE_8__["getStartMonthFromDate"])({
              d: new Date()
            });
            range.dateA = dateA;
            break;
          }

        default:
          {
            range = null;
          }
      }

      changeRangeFilter(range);
    }
  }, {
    key: "filterByDescription",
    value: function filterByDescription(descriptionOptional) {
      var descriptionFilter = this.state.descriptionFilter;
      var changeDescription = this.props.changeDescription;
      changeDescription(descriptionOptional === '' ? descriptionOptional : descriptionFilter);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          toggle = _this$props.toggle,
          title = _this$props.title,
          className = _this$props.className,
          data = _this$props.data,
          putDocumentRead = _this$props.putDocumentRead;
      var descriptionFilter = this.state.descriptionFilter;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        isOpen: isOpen,
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
        style: {
          color: '#0E6837'
        }
      }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "transactionRange",
        id: "transactionRange",
        className: "select-range",
        onChange: this.onChangeRangeFilter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "all"
      }, "All transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "month"
      }, "Last month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "90"
      }, "Last 90 days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "search-input",
        type: "text",
        onChange: this.onChangeDescription,
        value: descriptionFilter
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "search-button",
        type: "button",
        onClick: this.filterByDescription
      }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
        style: {
          padding: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "my-table"
      }, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_table_MyTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
        toggleModal: toggle,
        data: data,
        putDocumentRead: putDocumentRead
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: function onClick() {
          _this2.onChangeRangeFilter();

          _this2.onChangeDescription();

          _this2.filterByDescription('');

          toggle();
        }
      }, "Close")));
    }
  }]);

  return MyModal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

MyModal.defaultProps = {
  title: '',
  className: '',
  data: []
};
/* harmony default export */ __webpack_exports__["default"] = (MyModal);

/***/ }),

/***/ "./src/components/table/MyTable.js":
/*!*****************************************!*\
  !*** ./src/components/table/MyTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_table_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Pagination */ "./src/components/table/Pagination.js");
/* harmony import */ var assets_pdf_Entando_Development_Methodology_pdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/pdf/Entando_Development_Methodology.pdf */ "./src/assets/pdf/Entando_Development_Methodology.pdf");
/* harmony import */ var assets_pdf_Entando_Development_Methodology_pdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_pdf_Entando_Development_Methodology_pdf__WEBPACK_IMPORTED_MODULE_8__);










var MyTable = /*#__PURE__*/function (_React$PureComponent) {
  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyTable, _React$PureComponent);

  var _super = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MyTable);

  function MyTable(props) {
    var _this;

    Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyTable);

    _this = _super.call(this, props);

    _this.paginate = function (pageNumber) {
      return _this.setCurrentPage(pageNumber);
    };

    _this.handleFileRead = function (doc) {
      var newDoc = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, doc);

      if (doc.read) return;
      var putDocumentRead = _this.props.putDocumentRead;
      newDoc.read = true;
      putDocumentRead(newDoc);
    };

    _this.generateTable = function (data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        className: "MyTable",
        responsive: true,
        size: "sm",
        hover: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "DOCUMENT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", null, "DATE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", null, data && data.map(function (d) {
        var createdAt = d.createdAt,
            description = d.description,
            read = d.read;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
          key: d.id,
          onClick: function onClick() {
            _this.handleFileRead(d);

            window.open(assets_pdf_Entando_Development_Methodology_pdf__WEBPACK_IMPORTED_MODULE_8___default.a, '_blank'); // toggleModal()
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          style: read ? {
            fontWeight: 'normal'
          } : {
            fontWeight: 'bold'
          }
        }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          style: read ? {
            fontWeight: 'normal'
          } : {
            fontWeight: 'bold'
          }
        }, createdAt));
      })));
    };

    _this.state = {
      itemsPerPage: 5,
      currentPage: 1
    };
    return _this;
  } // componentDidMount() {
  //   const {data} = this.props;
  //   this.setState({data: data})
  // }


  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyTable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var data = this.props.data;

      if (prevProps.data !== data) {
        this.handleTable();
      }
    }
  }, {
    key: "setCurrentPage",
    value: function setCurrentPage(pageNumber) {
      this.setState({
        currentPage: pageNumber
      });
    }
  }, {
    key: "handleTable",
    value: function handleTable() {
      var data = this.props.data;
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          itemsPerPage = _this$state.itemsPerPage;
      var indexOfLastStatement = currentPage * itemsPerPage;
      var indexOfFirstStatement = indexOfLastStatement - itemsPerPage;
      var currentStatements = data.slice(indexOfFirstStatement, indexOfLastStatement);
      return this.generateTable(currentStatements);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          itemsPerPage = _this$state2.itemsPerPage,
          currentPage = _this$state2.currentPage;
      var data = this.props.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, this.handleTable(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_table_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "paginator",
        itemsPerPage: itemsPerPage,
        totalItems: data.length,
        currentPage: currentPage,
        paginate: this.paginate
      }));
    }
  }]);

  return MyTable;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (MyTable);

/***/ }),

/***/ "./src/components/table/Pagination.js":
/*!********************************************!*\
  !*** ./src/components/table/Pagination.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Pagination = function Pagination(_ref) {
  var className = _ref.className,
      itemsPerPage = _ref.itemsPerPage,
      totalItems = _ref.totalItems,
      paginate = _ref.paginate,
      currentPage = _ref.currentPage;
  var pageNumbers = []; // eslint-disable-next-line no-plusplus

  for (var i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination"
  }, pageNumbers.map(function (number) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: number,
      className: "page-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return paginate(number);
      },
      className: "page-link",
      style: currentPage === number ? {
        background: '#eeeeee'
      } : null
    }, number));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/custom-elements/ListItem.js":
/*!*****************************************!*\
  !*** ./src/custom-elements/ListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var auth_KeycloakContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! auth/KeycloakContext */ "./src/auth/KeycloakContext.js");
/* harmony import */ var AppContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! AppContainer */ "./src/AppContainer.js");
/* harmony import */ var helpers_widgetEvents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/widgetEvents */ "./src/helpers/widgetEvents.js");
/* harmony import */ var custom_elements_widgetEventTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! custom-elements/widgetEventTypes */ "./src/custom-elements/widgetEventTypes.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var api_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! api/constants */ "./src/api/constants.js");















var getKeycloakInstance = function getKeycloakInstance() {
  return window && window.entando && window.entando.keycloak && Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, window.entando.keycloak, {
    initialized: true
  }) || {
    initialized: false
  };
};

var ATTRIBUTES = {
  icon: 'icon',
  title: 'title',
  serviceURL: 'serviceurl'
};

var ListItem = /*#__PURE__*/function (_HTMLElement) {
  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ListItem, _HTMLElement);

  var _super = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(ListItem);

  function ListItem() {
    var _this;

    Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.mountPoint = null;
    _this.unsubscribeFromKeycloakEvent = null;
    _this.keycloak = getKeycloakInstance();
    return _this;
  }

  Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (!Object.values(ATTRIBUTES).includes(name)) {
        throw new Error("Untracked changed attribute: ".concat(name));
      }

      Object(api_constants__WEBPACK_IMPORTED_MODULE_13__["setServiceURL"])(this.getAttribute(ATTRIBUTES.serviceURL));

      if (this.mountPoint && newValue !== oldValue) {
        this.render();
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.mountPoint = document.createElement('div');
      this.appendChild(this.mountPoint);
      var locale = this.getAttribute('locale') || 'en';
      i18next__WEBPACK_IMPORTED_MODULE_12__["default"].changeLanguage(locale);
      this.keycloak = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, getKeycloakInstance(), {
        initialized: true
      });
      this.unsubscribeFromKeycloakEvent = Object(helpers_widgetEvents__WEBPACK_IMPORTED_MODULE_10__["subscribeToWidgetEvent"])(custom_elements_widgetEventTypes__WEBPACK_IMPORTED_MODULE_11__["KEYCLOAK_EVENT_TYPE"], function () {
        _this2.keycloak = Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["default"])({}, getKeycloakInstance(), {
          initialized: true
        });

        _this2.render();
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var icon = this.getAttribute(ATTRIBUTES.icon);
      var title = this.getAttribute(ATTRIBUTES.title);
      react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(auth_KeycloakContext__WEBPACK_IMPORTED_MODULE_8__["KeycloakContext"].Provider, {
        value: this.keycloak
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AppContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: icon,
        title: title
      })), this.mountPoint);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.unsubscribeFromKeycloakEvent) {
        this.unsubscribeFromKeycloakEvent();
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return Object.values(ATTRIBUTES);
    }
  }]);

  return ListItem;
}( /*#__PURE__*/Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(HTMLElement));

customElements.define('list-item', ListItem);
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./src/custom-elements/widgetEventTypes.js":
/*!*************************************************!*\
  !*** ./src/custom-elements/widgetEventTypes.js ***!
  \*************************************************/
/*! exports provided: KEYCLOAK_EVENT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYCLOAK_EVENT_TYPE", function() { return KEYCLOAK_EVENT_TYPE; });
// eslint-disable-next-line import/prefer-default-export
var KEYCLOAK_EVENT_TYPE = 'keycloak';

/***/ }),

/***/ "./src/helpers/widgetEvents.js":
/*!*************************************!*\
  !*** ./src/helpers/widgetEvents.js ***!
  \*************************************/
/*! exports provided: publishWidgetEvent, createWidgetEventPublisher, subscribeToWidgetEvent, subscribeToWidgetEvents, widgetEventToFSA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishWidgetEvent", function() { return publishWidgetEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWidgetEventPublisher", function() { return createWidgetEventPublisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToWidgetEvent", function() { return subscribeToWidgetEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToWidgetEvents", function() { return subscribeToWidgetEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetEventToFSA", function() { return widgetEventToFSA; });
var publishWidgetEvent = function publishWidgetEvent(eventId, payload) {
  var widgetEvent = new CustomEvent(eventId, {
    detail: {
      payload: payload
    }
  });
  window.dispatchEvent(widgetEvent);
};
var createWidgetEventPublisher = function createWidgetEventPublisher(eventType) {
  return function (payload) {
    return publishWidgetEvent(eventType, payload);
  };
};
var subscribeToWidgetEvent = function subscribeToWidgetEvent(eventType, eventHandler) {
  window.addEventListener(eventType, eventHandler);
  return function () {
    window.removeEventListener(eventType, eventHandler);
  };
};
var subscribeToWidgetEvents = function subscribeToWidgetEvents(widgetEvents, eventHandler) {
  widgetEvents.forEach(function (eventType) {
    return window.addEventListener(eventType, eventHandler);
  });
  return function () {
    widgetEvents.forEach(function (eventType) {
      return window.removeEventListener(eventType, eventHandler);
    });
  };
};
var widgetEventToFSA = function widgetEventToFSA(widgetEvent) {
  // for info about Flux Standard Action (FSA) see https://github.com/redux-utilities/flux-standard-action
  var type = widgetEvent.type,
      _widgetEvent$detail = widgetEvent.detail,
      payload = _widgetEvent$detail.payload,
      error = _widgetEvent$detail.error,
      meta = _widgetEvent$detail.meta;
  return {
    type: type,
    payload: payload,
    error: error,
    meta: meta
  };
};

/***/ }),

/***/ "./src/i18n/i18n.js":
/*!**************************!*\
  !*** ./src/i18n/i18n.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var i18n_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n/locales */ "./src/i18n/locales/index.js");




 // adds the default namespace ('translation') to resources object per i18next documentation

var resources = Object.keys(i18n_locales__WEBPACK_IMPORTED_MODULE_4__["default"]).reduce(function (acc, lang) {
  return Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, acc, Object(_Users_germano_labs_lambda_sample_bundle_microfrontends_view_statements_mf_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lang, {
    translation: i18n_locales__WEBPACK_IMPORTED_MODULE_4__["default"][lang]
  }));
}, {});
i18next__WEBPACK_IMPORTED_MODULE_2__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_3__["initReactI18next"]).init({
  fallbackLng: 'en',
  resources: resources,
  interpolation: {
    escapeValue: false
  }
});

/***/ }),

/***/ "./src/i18n/locales/en.json":
/*!**********************************!*\
  !*** ./src/i18n/locales/en.json ***!
  \**********************************/
/*! exports provided: common, entities, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"common\":{\"couldNotFetchData\":\"Unfortunately we could not get data for this user\",\"widgetName\":\"{{widgetNamePlaceholder}}\",\"name\":\"Name\",\"value\":\"Value\",\"loading\":\"Loading...\",\"missingId\":\"Please provide user ID\",\"notAuthenticated\":\"Waiting for authorization...\",\"download\":\"Download file\"},\"entities\":{\"item\":{\"id\":\"ID\",\"accountNumber\":\"entities.item.accountNumber\",\"balance\":\"entities.item.balance\",\"userId\":\"entities.item.userId\"}}}");

/***/ }),

/***/ "./src/i18n/locales/index.js":
/*!***********************************!*\
  !*** ./src/i18n/locales/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n/locales/en.json */ "./src/i18n/locales/en.json");
var i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! i18n/locales/en.json */ "./src/i18n/locales/en.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ({
  en: i18n_locales_en_json__WEBPACK_IMPORTED_MODULE_0__
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/index.scss */ "./src/assets/sass/index.scss");
/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vendors_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vendors/bootstrap */ "./src/vendors/bootstrap.js");
/* harmony import */ var i18n_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n/i18n */ "./src/i18n/i18n.js");
/* harmony import */ var custom_elements_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! custom-elements/ListItem */ "./src/custom-elements/ListItem.js");





/***/ }),

/***/ "./src/vendors/bootstrap.js":
/*!**********************************!*\
  !*** ./src/vendors/bootstrap.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/germano/labs/lambda-sample-bundle/microfrontends/view-statements-mf/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/germano/labs/lambda-sample-bundle/microfrontends/view-statements-mf/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map