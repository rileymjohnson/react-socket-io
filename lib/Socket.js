'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Socket = function (_React$Component) {
  (0, _inherits3.default)(Socket, _React$Component);
  (0, _createClass3.default)(Socket, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        socket: this.socket,
        onError: this.onError
      };
    }
  }]);

  function Socket(props, context) {
    (0, _classCallCheck3.default)(this, Socket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Socket.__proto__ || (0, _getPrototypeOf2.default)(Socket)).call(this, props, context));

    _this.socket = props.socket;
    _this.onError = props.onError;
    return _this;
  }

  (0, _createClass3.default)(Socket, [{
    key: 'mergeOptions',
    value: function mergeOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var defaultOptions = {
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1 * 1000,
        reconnectionDelayMax: 10 * 1000,
        autoConnect: true,
        transports: ['polling'],
        rejectUnauthorized: true
      };
      return (0, _extends3.default)({}, defaultOptions, options);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);
  return Socket;
}(_react2.default.Component);

Socket.propTypes = {
  options: _react2.default.PropTypes.object,
  uri: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.element.isRequired
};

Socket.childContextTypes = {
  socket: _react2.default.PropTypes.object,
  onError: _react2.default.PropTypes.func
};

exports.default = Socket;