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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = exports.init = function init() {
    var dropdowns = document.querySelectorAll(".dropdown");

    var _loop = function _loop(i) {
        var dropdown = dropdowns[i].querySelector("li");
        var dropdownContent = dropdowns[i].querySelector(".dropdown-content");
        var dropdownHeader = dropdowns[i].querySelector(".dropdown-header");

        dropdown.addEventListener("click", function () {
            dropdownContent.classList.toggle("dropdown-content-show");
        });

        dropdownContent.addEventListener("click", function (event) {
            if (event.target.parentElement == dropdownContent) {
                var clicked = event.target.innerHTML;
                var original = dropdownHeader.innerHTML;
                dropdownHeader.innerHTML = clicked;
                event.target.innerHTML = original;
                dropdownContent.classList.toggle("dropdown-content-show");
            }
        });
    };

    for (var i = 0; i < 2; i++) {
        _loop(i);
    }
};

/***/ }),

/***/ "./src/expand_row.js":
/*!***************************!*\
  !*** ./src/expand_row.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = exports.init = function init() {
    var expandRowToggle = document.querySelectorAll(".expand-row-toggle");
    expandRowToggle.forEach.call(expandRowToggle, function (e) {
        e.addEventListener('click', function (event) {
            var container = void 0;
            if (event.target.parentElement.classList.contains("form-row")) {
                container = event.target.parentElement.querySelector(".form-row__expandable");
            } else if (event.target.parentElement.classList.contains("button")) {
                container = event.target.parentElement.parentElement.querySelector(".form-row__expandable");
            }
            if (container.classList.contains("form-row__expandable--hidden")) {
                var _bottomLabels = container.parentElement.querySelectorAll(".form-row__label-bottom");
                container.className = "form-row form-row__expandable form-row__expandable--shown";
                _bottomLabels[0].style.opacity = "1";
                var _expandRowToggle = container.parentElement.querySelector(".expand-row-toggle");
                _expandRowToggle.innerHTML = "<img src=\"img/Rectangle 157.png\">";
            } else if (container.classList.contains("form-row__expandable--shown")) {
                var _bottomLabels2 = container.parentElement.querySelectorAll(".form-row__label-bottom");
                container.className = "form-row form-row__expandable form-row__expandable--hidden";
                _bottomLabels2[0].style.opacity = "0";
                var _expandRowToggle2 = container.parentElement.querySelector(".expand-row-toggle");
                if (_expandRowToggle2.id = "padding-expand") {
                    _expandRowToggle2.innerHTML = "<img src=\"img/Group 140.png\">";
                } else {
                    _expandRowToggle2.innerHTML = "<img src=\"img/Group 139.png\">";
                }
            }
        });
    });
    var bottomLabels = document.querySelectorAll(".first-label");
    bottomLabels.forEach(function (element) {
        element.style.opacity = "0";
    });
};

/***/ }),

/***/ "./src/expand_toggle.js":
/*!******************************!*\
  !*** ./src/expand_toggle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = exports.init = function init() {
    var expandToggle = document.querySelectorAll(".expand-toggle");
    expandToggle.forEach.call(expandToggle, function (e) {
        e.addEventListener('click', function (event) {
            var container = event.target.parentElement.parentElement.querySelector(".section-content");
            if (container.classList.contains("section-content--hidden")) {
                container.className = "section-content section-content--shown";
            } else if (container.classList.contains("section-content--shown")) {
                container.className = "section-content section-content--hidden";
            }
        });
    });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");

var dropdown = _interopRequireWildcard(_dropdown);

var _expand_toggle = __webpack_require__(/*! ./expand_toggle */ "./src/expand_toggle.js");

var expandToggle = _interopRequireWildcard(_expand_toggle);

var _expand_row = __webpack_require__(/*! ./expand_row */ "./src/expand_row.js");

var expandRow = _interopRequireWildcard(_expand_row);

var _transform_point = __webpack_require__(/*! ./transform_point */ "./src/transform_point.js");

var transformPoint = _interopRequireWildcard(_transform_point);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

dropdown.init();
expandToggle.init();
expandRow.init();
transformPoint.init();

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/transform_point.js":
/*!********************************!*\
  !*** ./src/transform_point.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = exports.init = function init() {
    var cells = document.querySelectorAll(".cell");
    cells[0].parentElement.addEventListener("click", function (event) {
        if (event.target.className == "cell") {
            event.target.classList.add("cell--active");
            cells.forEach(function (el) {
                if (event.target != el) {
                    el.classList.remove("cell--active");
                }
            });
        }
    });
};

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/style.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/style.sass */"./src/style.sass");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map