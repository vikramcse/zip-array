var expect = require('chai').expect;

describe('Tests for array zip', function () {
  it('should return combined result w.r.t shortest array', function () {
    var zip = require('./index.js').zip;
    expect(zip([1, 2], ['a', 'b'])).to.eql([[ 1, 'a' ], [ 2, 'b' ]]);
  });

  it('should return combined result w.r.t longest array', function () {
    var zip = require('./index.js').zip_longest;
    expect(zip([1, 2, 3], [1, 2], [11]))
      .to.eql([[1, 1, 11], [2, 2, undefined], [3, undefined, undefined]]);
  });

  it('should return combined result', function () {
    var zip = require('./index.js').zip_longest;
    expect(zip([1, 2, 3], [1, 2, 'a'], [11, 'z', 'k']))
      .to.eql([[1, 1, 11], [2, 2, 'z'], [3, 'a', 'k']]);
  });
});
