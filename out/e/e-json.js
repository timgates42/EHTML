'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require('@page-libs/cutie'),
    browserified = _require.browserified;

var _browserified = browserified(require('@cuties/object')),
    CreatedOptions = _browserified.CreatedOptions;

var _browserified2 = browserified(require('@cuties/json')),
    ParsedJSON = _browserified2.ParsedJSON;

var _browserified3 = browserified(require('@cuties/buffer')),
    StringFromBuffer = _browserified3.StringFromBuffer;

var _require2 = require('@page-libs/ajax'),
    ResponseFromAjaxRequest = _require2.ResponseFromAjaxRequest,
    ResponseBody = _require2.ResponseBody;

var AppliedActions = require('./../async/AppliedActions');

var E = require('./../E');

var EJSON =
/*#__PURE__*/
function (_E) {
  _inherits(EJSON, _E);

  function EJSON() {
    _classCallCheck(this, EJSON);

    return _possibleConstructorReturn(this, _getPrototypeOf(EJSON).call(this));
  }

  _createClass(EJSON, [{
    key: "supportedActions",
    value: function supportedActions() {
      return ['redirect', 'saveToLocalStorage', 'saveToMemoryStorage', 'innerHTML', 'addHTMLTo', 'mapObjToElm', 'hideElms', 'showElms', 'disableElms', 'enableElms', 'changeElmsClassName'];
    }
  }, {
    key: "onRender",
    value: function onRender() {
      new AppliedActions(this.tagName, this.attr('data-object'), this.attr('data-actions'), this.supportedActions(), new ParsedJSON(new StringFromBuffer(new ResponseBody(new ResponseFromAjaxRequest(new CreatedOptions('url', this.attr('data-request-url'), 'method', this.attr('data-request-method') || 'GET', 'headers', new ParsedJSON(this.attr('data-request-headers') || '{}')), this.attr('data-request-body')))))).call();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['data-request-url', 'data-request-method', 'data-request-headers', 'data-request-body', 'data-object', 'data-actions'];
    }
  }]);

  return EJSON;
}(E);

window.customElements.define('e-json', EJSON);
module.exports = EJSON;