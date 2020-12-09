/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/block/src/section-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/block/src/block/BaseBlock.js":
/*!************************************************!*\
  !*** ./assets/js/block/src/block/BaseBlock.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseBlock; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var BaseBlock = /*#__PURE__*/function () {
  function BaseBlock(blockType, blockDomain, blockArgs) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BaseBlock);

    this.blockType = blockType;
    this.blockDomain = blockDomain;
    this.blockBaseId = this.blockDomain.replace(/-/gi, '_') + '_' + this.blockType.replace(/-/gi, '_');
    this.blockArgs = blockArgs;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BaseBlock, [{
    key: "init",
    value: function init() {
      var _this = this;

      Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])("".concat(this.blockDomain, "/").concat(this.blockType), _objectSpread(_objectSpread({}, this.blockArgs), {}, {
        edit: function edit(_ref) {
          var attributes = _ref.attributes,
              setAttributes = _ref.setAttributes;
          var panels = wp.hooks.applyFilters("".concat(_this.blockBaseId, "_block_panels"), {});
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object.keys(panels).map(function (panelKey) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
              title: panels[panelKey],
              key: panelKey,
              initialOpen: false
            }, wp.hooks.applyFilters("".concat(_this.blockBaseId, "_block_").concat(panelKey, "_panel"), [], attributes, setAttributes).map(function (item, key) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                key: key
              }, item);
            }));
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Disabled"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_8___default.a, {
            block: "".concat(_this.blockDomain, "/").concat(_this.blockType),
            attributes: attributes
          })));
        },
        save: function save() {
          return null;
        }
      }));
    }
  }, {
    key: "changeBlockPanels",
    value: function changeBlockPanels(panels) {
      return _objectSpread(_objectSpread({}, panels), {}, {
        general: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'grimlock'),
        layout: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Layout', 'grimlock'),
        style: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'grimlock')
      });
    }
  }, {
    key: "addSeparator",
    value: function addSeparator(fields) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("hr", null));
      return fields;
    }
  }]);

  return BaseBlock;
}();



/***/ }),

/***/ "./assets/js/block/src/block/SectionBlock.js":
/*!***************************************************!*\
  !*** ./assets/js/block/src/block/SectionBlock.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBlock; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_ImageSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/ImageSelector */ "./assets/js/block/src/component/ImageSelector.js");
/* harmony import */ var _component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/ColorPickerControl */ "./assets/js/block/src/component/ColorPickerControl.js");
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BaseBlock */ "./assets/js/block/src/block/BaseBlock.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var _GrimlockSectionBlock = GrimlockSectionBlock,
    GRIMLOCK_PLUGIN_DIR_URL = _GrimlockSectionBlock.GRIMLOCK_PLUGIN_DIR_URL;

var SectionBlock = /*#__PURE__*/function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SectionBlock, _BaseBlock);

  var _super = _createSuper(SectionBlock);

  function SectionBlock() {
    var _this;

    var blockType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'section';
    var blockDomain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'grimlock';
    var blockArgs = arguments.length > 2 ? arguments[2] : undefined;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SectionBlock);

    blockArgs = _objectSpread({
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Grimlock Section', 'grimlock'),
      icon: 'align-left',
      category: 'widgets',
      keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('section', 'grimlock')],
      supports: {
        html: false,
        align: ['wide', 'full']
      }
    }, blockArgs);
    _this = _super.call(this, blockType, blockDomain, blockArgs); // Register Block Panels

    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_panels"), "".concat(_this.blockBaseId, "_change_block_panels"), _this.registerBlockPanels.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)));
    /**
     * General Panel
     */

    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_thumbnail_field"), _this.addThumbnailField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 10);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_separator_20_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 20);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_title_field"), _this.addTitleField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 30);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_subtitle_field"), _this.addSubtitleField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 40);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_text_field"), _this.addTextField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 50);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_wpautoped_field"), _this.addWpautopedField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 60);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_separator_70_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 70);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_button_displayed_field"), _this.addButtonDisplayedField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 80);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_button_text_field"), _this.addButtonTextField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 90);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_button_link_field"), _this.addButtonLinkField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 100);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_general_panel"), "".concat(_this.blockBaseId, "_add_button_target_blank_field"), _this.addButtonTargetBlankField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 110);
    /**
     * Layout Panel
     */

    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_layout_panel"), "".concat(_this.blockBaseId, "_add_layout_field"), _this.addLayoutField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 10);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_layout_panel"), "".concat(_this.blockBaseId, "_add_container_layout_field"), _this.addContainerLayoutField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 20);
    /**
     * Style Panel
     */

    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_background_image_field"), _this.addBackgroundImageField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 10);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_separator_20_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 20);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_margin_top_field"), _this.addMarginTopField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 30);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_margin_bottom_field"), _this.addMarginBottomField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 40);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_padding_y_field"), _this.addPaddingYField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 50);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_separator_60_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 60);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_background_color_field"), _this.addBackgroundColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 70);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_background_gradient_field"), _this.addBackgroundGradientField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 80);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_separator_90_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 90);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_border_top_width_field"), _this.addBorderTopWidthField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 100);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_border_top_color_field"), _this.addBorderTopColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 110);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_border_bottom_width_field"), _this.addBorderBottomWidthField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 120);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_border_bottom_color_field"), _this.addBorderBottomColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 130);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_separator_140_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 140);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_title_format_field"), _this.addTitleFormatField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 150);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_title_color_field"), _this.addTitleColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 160);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_subtitle_format_field"), _this.addSubtitleFormatField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 170);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_subtitle_color_field"), _this.addSubtitleColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 180);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_text_color_field"), _this.addTextColorField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 190);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_separator_200_field"), _this.addSeparator.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 200);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_button_format_field"), _this.addButtonFormatField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 210);
    wp.hooks.addFilter("".concat(_this.blockBaseId, "_block_style_panel"), "".concat(_this.blockBaseId, "_add_button_size_field"), _this.addButtonSizeField.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 220);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SectionBlock, [{
    key: "registerBlockPanels",
    value: function registerBlockPanels(panels) {
      return _objectSpread(_objectSpread({}, panels), {}, {
        general: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('General', 'grimlock'),
        layout: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Layout', 'grimlock'),
        style: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Style', 'grimlock')
      });
    }
  }, {
    key: "addThumbnailField",
    value: function addThumbnailField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ImageSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Thumbnail', 'grimlock'),
        value: attributes.thumbnail || 0,
        onChange: function onChange(thumbnail) {
          return setAttributes({
            thumbnail: thumbnail
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addTitleField",
    value: function addTitleField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Title', 'grimlock'),
        value: attributes.title || '',
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addSubtitleField",
    value: function addSubtitleField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Subtitle', 'grimlock'),
        value: attributes.subtitle || '',
        onChange: function onChange(subtitle) {
          return setAttributes({
            subtitle: subtitle
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addTextField",
    value: function addTextField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Text', 'grimlock'),
        value: attributes.text || '',
        onChange: function onChange(text) {
          return setAttributes({
            text: text
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addWpautopedField",
    value: function addWpautopedField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Automatically add paragraphs', 'grimlock'),
        checked: !!attributes.text_wpautoped,
        onChange: function onChange(text_wpautoped) {
          return setAttributes({
            text_wpautoped: text_wpautoped
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addButtonDisplayedField",
    value: function addButtonDisplayedField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display button', 'grimlock'),
        checked: !!attributes.button_displayed,
        onChange: function onChange(button_displayed) {
          return setAttributes({
            button_displayed: button_displayed
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addButtonTextField",
    value: function addButtonTextField(fields, attributes, setAttributes) {
      if (attributes.button_displayed) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button Text', 'grimlock'),
          value: attributes.button_text || '',
          onChange: function onChange(button_text) {
            return setAttributes({
              button_text: button_text
            });
          }
        }));
      }

      return fields;
    }
  }, {
    key: "addButtonLinkField",
    value: function addButtonLinkField(fields, attributes, setAttributes) {
      if (attributes.button_displayed) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TextControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button Link', 'grimlock'),
          value: attributes.button_link || '',
          onChange: function onChange(button_link) {
            return setAttributes({
              button_link: button_link
            });
          }
        }));
      }

      return fields;
    }
  }, {
    key: "addButtonTargetBlankField",
    value: function addButtonTargetBlankField(fields, attributes, setAttributes) {
      if (attributes.button_displayed) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Open link in a new page', 'grimlock'),
          checked: !!attributes.button_target_blank,
          onChange: function onChange(button_target_blank) {
            return setAttributes({
              button_target_blank: button_target_blank
            });
          }
        }));
      }

      return fields;
    }
  }, {
    key: "addLayoutField",
    value: function addLayoutField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RadioControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Layout', 'grimlock'),
        selected: attributes.layout || '',
        onChange: function onChange(layout) {
          return setAttributes({
            layout: layout
          });
        },
        options: [{
          value: '12-cols-left',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-left.png',
            alt: "12-cols-left"
          })
        }, {
          value: '12-cols-center',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-center.png',
            alt: "12-cols-center"
          })
        }, {
          value: '12-cols-right',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-right.png',
            alt: "12-cols-right"
          })
        }, {
          value: '6-6-cols-left',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left.png',
            alt: "6-6-cols-left"
          })
        }, {
          value: '6-6-cols-left-reverse',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-reverse.png',
            alt: "6-6-cols-left-reverse"
          })
        }, {
          value: '4-8-cols-left',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-4-8-cols-left.png',
            alt: "4-8-cols-left"
          })
        }, {
          value: '4-8-cols-left-reverse',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-4-8-cols-left-reverse.png',
            alt: "4-8-cols-left-reverse"
          })
        }, {
          value: '6-6-cols-left-modern',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-modern.png',
            alt: "6-6-cols-left-modern"
          })
        }, {
          value: '6-6-cols-left-reverse-modern',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-reverse-modern.png',
            alt: "6-6-cols-left-reverse-modern"
          })
        }, {
          value: '8-4-cols-left-modern',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-8-4-cols-left-modern.png',
            alt: "8-4-cols-left-modern"
          })
        }, {
          value: '8-4-cols-left-reverse-modern',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-8-4-cols-left-reverse-modern.png',
            alt: "8-4-cols-left-reverse-modern"
          })
        }],
        className: "grimlock-radio-image"
      }));
      return fields;
    }
  }, {
    key: "addContainerLayoutField",
    value: function addContainerLayoutField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RadioControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Spread', 'grimlock'),
        selected: attributes.container_layout || '',
        onChange: function onChange(container_layout) {
          return setAttributes({
            container_layout: container_layout
          });
        },
        options: [{
          value: 'classic',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-classic.png',
            alt: "classic"
          })
        }, {
          value: 'fluid',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-fluid.png',
            alt: "fluid"
          })
        }, {
          value: 'narrow',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-narrow.png',
            alt: "narrow"
          })
        }, {
          value: 'narrower',
          label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("img", {
            src: GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-narrower.png',
            alt: "narrower"
          })
        }],
        className: "grimlock-radio-image"
      }));
      return fields;
    }
  }, {
    key: "addBackgroundImageField",
    value: function addBackgroundImageField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ImageSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Background Image', 'grimlock'),
        value: attributes.background_image || 0,
        onChange: function onChange(background_image) {
          return setAttributes({
            background_image: background_image
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addMarginTopField",
    value: function addMarginTopField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Top Margin', 'grimlock'),
        value: attributes.margin_top || 0,
        onChange: function onChange(margin_top) {
          return setAttributes({
            margin_top: margin_top
          });
        },
        min: -25,
        max: 25
      }));
      return fields;
    }
  }, {
    key: "addMarginBottomField",
    value: function addMarginBottomField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom Margin', 'grimlock'),
        value: attributes.margin_bottom || 0,
        onChange: function onChange(margin_bottom) {
          return setAttributes({
            margin_bottom: margin_bottom
          });
        },
        min: -25,
        max: 25
      }));
      return fields;
    }
  }, {
    key: "addPaddingYField",
    value: function addPaddingYField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Vertical Padding', 'grimlock'),
        value: attributes.padding_y || 0,
        onChange: function onChange(padding_y) {
          return setAttributes({
            padding_y: padding_y
          });
        },
        min: 0,
        max: 25
      }));
      return fields;
    }
  }, {
    key: "addBackgroundColorField",
    value: function addBackgroundColorField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Background Color', 'grimlock'),
        value: attributes.background_color || '#ffffff',
        onChange: function onChange(background_color) {
          return setAttributes({
            background_color: background_color
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addBackgroundGradientDisplayedField",
    value: function addBackgroundGradientDisplayedField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add Gradient to Background Color', 'grimlock'),
        checked: !!attributes.background_gradient_displayed,
        onChange: function onChange(background_gradient_displayed) {
          return setAttributes({
            background_gradient_displayed: background_gradient_displayed
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addBackgroundGradientField",
    value: function addBackgroundGradientField(fields, attributes, setAttributes) {
      var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["useState"])({
        gradientDisplayed: false
      }),
          _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add Gradient to Background Color', 'grimlock'),
        checked: !!state.gradientDisplayed,
        onChange: function onChange(gradientDisplayed) {
          if (!gradientDisplayed) setAttributes({
            background_gradient: ''
          });
          setState({
            gradientDisplayed: gradientDisplayed
          });
        }
      }), state.gradientDisplayed && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["__experimentalColorGradientControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Background Gradient', 'grimlock'),
        gradientValue: attributes.background_gradient || '',
        onGradientChange: function onGradientChange(background_gradient) {
          return setAttributes({
            background_gradient: background_gradient
          });
        }
      })));
      return fields;
    }
  }, {
    key: "addBorderTopWidthField",
    value: function addBorderTopWidthField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Border Top Width', 'grimlock'),
        value: attributes.border_top_width || 0,
        onChange: function onChange(border_top_width) {
          return setAttributes({
            border_top_width: border_top_width
          });
        },
        min: 0,
        max: 25
      }));
      return fields;
    }
  }, {
    key: "addBorderTopColorField",
    value: function addBorderTopColorField(fields, attributes, setAttributes) {
      if (attributes.border_top_width > 0) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Border Top Color', 'grimlock'),
          value: attributes.border_top_color || '#ffffff',
          onChange: function onChange(border_top_color) {
            return setAttributes({
              border_top_color: border_top_color
            });
          }
        }));
      }

      return fields;
    }
  }, {
    key: "addBorderBottomWidthField",
    value: function addBorderBottomWidthField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Border Bottom Width', 'grimlock'),
        value: attributes.border_bottom_width || 0,
        onChange: function onChange(border_bottom_width) {
          return setAttributes({
            border_bottom_width: border_bottom_width
          });
        },
        min: 0,
        max: 25
      }));
      return fields;
    }
  }, {
    key: "addBorderBottomColorField",
    value: function addBorderBottomColorField(fields, attributes, setAttributes) {
      if (attributes.border_bottom_width > 0) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Border Bottom Color', 'grimlock'),
          value: attributes.border_bottom_color || '#ffffff',
          onChange: function onChange(border_bottom_color) {
            return setAttributes({
              border_bottom_color: border_bottom_color
            });
          }
        }));
      }

      return fields;
    }
  }, {
    key: "addTitleFormatField",
    value: function addTitleFormatField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Title Format', 'grimlock'),
        value: attributes.title_format,
        onChange: function onChange(title_format) {
          return setAttributes({
            title_format: title_format
          });
        },
        options: [{
          value: 'display-1',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 1', 'grimlock')
        }, {
          value: 'display-2',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 2', 'grimlock')
        }, {
          value: 'display-3',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 3', 'grimlock')
        }, {
          value: 'display-4',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 4', 'grimlock')
        }, {
          value: 'lead',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Subheading', 'grimlock')
        }]
      }));
      return fields;
    }
  }, {
    key: "addTitleColorField",
    value: function addTitleColorField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Title Color', 'grimlock'),
        value: attributes.title_color || '#ffffff',
        onChange: function onChange(title_color) {
          return setAttributes({
            title_color: title_color
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addSubtitleFormatField",
    value: function addSubtitleFormatField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Subtitle Format', 'grimlock'),
        value: attributes.subtitle_format,
        onChange: function onChange(subtitle_format) {
          return setAttributes({
            subtitle_format: subtitle_format
          });
        },
        options: [{
          value: 'display-1',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 1', 'grimlock')
        }, {
          value: 'display-2',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 2', 'grimlock')
        }, {
          value: 'display-3',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 3', 'grimlock')
        }, {
          value: 'display-4',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading 4', 'grimlock')
        }, {
          value: 'lead',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Subheading', 'grimlock')
        }]
      }));
      return fields;
    }
  }, {
    key: "addSubtitleColorField",
    value: function addSubtitleColorField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Subtitle Color', 'grimlock'),
        value: attributes.subtitle_color || '#ffffff',
        onChange: function onChange(subtitle_color) {
          return setAttributes({
            subtitle_color: subtitle_color
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addTextColorField",
    value: function addTextColorField(fields, attributes, setAttributes) {
      fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_component_ColorPickerControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Text Color', 'grimlock'),
        value: attributes.text_color || '#ffffff',
        onChange: function onChange(text_color) {
          return setAttributes({
            text_color: text_color
          });
        }
      }));
      return fields;
    }
  }, {
    key: "addButtonFormatField",
    value: function addButtonFormatField(fields, attributes, setAttributes) {
      if (attributes.button_displayed) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button Format', 'grimlock'),
          value: attributes.button_format,
          onChange: function onChange(button_format) {
            return setAttributes({
              button_format: button_format
            });
          },
          options: [{
            value: 'btn-primary',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Primary', 'grimlock')
          }, {
            value: 'btn-secondary',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Secondary', 'grimlock')
          }, {
            value: 'btn-link',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Link', 'grimlock')
          }]
        }));
      }

      return fields;
    }
  }, {
    key: "addButtonSizeField",
    value: function addButtonSizeField(fields, attributes, setAttributes) {
      if (attributes.button_displayed) {
        fields.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button Size', 'grimlock'),
          value: attributes.button_size,
          onChange: function onChange(button_size) {
            return setAttributes({
              button_size: button_size
            });
          },
          options: [{
            value: 'btn-sm',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Small', 'grimlock')
          }, {
            value: '',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Regular', 'grimlock')
          }, {
            value: 'btn-lg',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Large', 'grimlock')
          }, {
            value: 'btn-block',
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Full Width', 'grimlock')
          }]
        }));
      }

      return fields;
    }
  }]);

  return SectionBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/block/src/component/ColorPickerControl.js":
/*!*************************************************************!*\
  !*** ./assets/js/block/src/component/ColorPickerControl.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ColorPickerControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ColorPickerControl, _Component);

  var _super = _createSuper(ColorPickerControl);

  function ColorPickerControl(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ColorPickerControl);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ColorPickerControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          colors = _this$props.colors,
          onChange = _this$props.onChange;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
        label: label,
        className: "grimlock-image-selector"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorIndicator"], {
        colorValue: value
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
        value: value,
        colors: colors,
        onChange: onChange,
        disableCustomColors: true,
        clearable: false
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          textAlign: 'right'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            style: {
              marginRight: '16px'
            },
            isLink: true,
            onClick: onToggle,
            "aria-expanded": isOpen
          }, __('Custom color', 'grimlock'));
        },
        renderContent: function renderContent() {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
            color: value,
            onChangeComplete: function onChangeComplete(_ref2) {
              var color = _ref2.color;
              return onChange(color.toRgbString());
            }
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: function onClick() {
          return onChange('');
        },
        isSecondary: true,
        isSmall: true
      }, __('Clear', 'grimlock'))));
    }
  }]);

  return ColorPickerControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var colorPickerSettings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useSelect"])(function (select) {
    var settings = select('core/block-editor').getSettings();
    return {
      colors: settings.colors
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ColorPickerControl, _objectSpread(_objectSpread({}, colorPickerSettings), props));
});

/***/ }),

/***/ "./assets/js/block/src/component/ImageSelector.js":
/*!********************************************************!*\
  !*** ./assets/js/block/src/component/ImageSelector.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ALLOWED_MEDIA_TYPES = ['image'];
var UNAUTHORIZED = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('To edit the background image, you need permission to upload media.', 'grimlock'));

var ImageSelector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ImageSelector, _Component);

  var _super = _createSuper(ImageSelector);

  function ImageSelector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageSelector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange,
          image = _this$props.image;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], {
        label: label,
        className: "grimlock-image-selector"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], {
        fallback: UNAUTHORIZED
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
        onSelect: function onSelect(image) {
          return onChange(image.id);
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            className: !value ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
            onClick: open
          }, !value && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('No image selected', 'grimlock'), !!value && !image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null), !!value && image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ResponsiveWrapper"], {
            naturalWidth: image.media_details.width,
            naturalHeight: image.media_details.height
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            src: image.source_url,
            alt: label
          }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            style: {
              margin: '10px 10px 0 0'
            },
            onClick: open,
            isSecondary: true
          }, !value ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Select Image', 'grimlock') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Change Image', 'grimlock')), !!value && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: function onClick() {
              return onChange(0);
            },
            isLink: true,
            isDestructive: true
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Remove image', 'grimlock')));
        }
      })));
    }
  }]);

  return ImageSelector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var value = props.value;
  return {
    image: value ? getMedia(value) : null
  };
}))(ImageSelector));

/***/ }),

/***/ "./assets/js/block/src/section-block.js":
/*!**********************************************!*\
  !*** ./assets/js/block/src/section-block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_SectionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/SectionBlock */ "./assets/js/block/src/block/SectionBlock.js");
 // Init Section Block

new _block_SectionBlock__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=section-block.js.map