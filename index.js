const initParser = require('./core/init/parser');
 
exports = module.exports = function () {
  return function () {
 
    initParser(this);
  }
}