exports = module.exports = function initParser(ins) {
  ['config'].forEach(k => {
    require('../plugins/parser/' + k).call(ins);
  });
};