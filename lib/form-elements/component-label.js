"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _myxss = _interopRequireDefault(require("./myxss"));

var _IntlMessages = _interopRequireDefault(require("../language-provider/IntlMessages"));

var ComponentLabel = function ComponentLabel(props) {
  var hasRequiredLabel = props.data.hasOwnProperty('required') && props.data.required === true && !props.read_only;

  var labelText = _myxss["default"].process(props.data.label);

  if (!labelText) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("label", {
    className: props.className || 'form-label'
  }, /*#__PURE__*/_react["default"].createElement("span", {
    dangerouslySetInnerHTML: {
      __html: labelText
    }
  }), hasRequiredLabel && /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-required badge badge-danger"
  }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
    id: "required"
  })));
};

var _default = ComponentLabel;
exports["default"] = _default;