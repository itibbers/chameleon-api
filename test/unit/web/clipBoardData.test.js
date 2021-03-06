require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('剪切板', function () {
  var testText = 'vava';
  it('setClipBoardData: 存入剪切板', function () {
    return cml.setClipBoardData(testText).then(function () {
      expect(testText).to.equal(global.document._clipBoardData);
    })
  })

  it('getClipBoardData: 获取剪切板数据', function () {
    return cml.getClipBoardData().then(function (text) {
      expect(testText).to.equal(text);
    })
  })
})
