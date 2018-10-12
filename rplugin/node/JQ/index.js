"use strict";

var _JQquery = require("./JQquery/JQquery");

var _JQquery2 = _interopRequireDefault(_JQquery);

var _JQfilter = require("./JQfilter");

var _JQfilter2 = _interopRequireDefault(_JQfilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = plugin => {
  plugin.registerFunction('JQquery', (0, _JQquery2.default)(plugin), {});
  plugin.registerFunction('JQfilter', (0, _JQfilter2.default)(plugin), {});
};