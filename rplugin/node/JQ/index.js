"use strict";

var _JQquery = require("./JQquery/JQquery");

var _JQquery2 = _interopRequireDefault(_JQquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = plugin => {
  plugin.registerFunction('JQquery', (0, _JQquery2.default)(plugin), {});
};