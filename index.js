'use strict';

function returnMap (shortest, arrs) {
  return shortest.map(function (item, i) {
    return arrs.map(function (arr) {
      return arr[i];
    });
  });
}

module.exports = {
  zip: function () {
    var arrs = Array.prototype.splice.call(arguments, 0);

    var shortest = arrs.reduce(function (a, b) {
      return a.length < b.length ? a : b;
    });

    return returnMap(shortest, arrs);
  },

  zip_longest: function () {
    var arrs = Array.prototype.splice.call(arguments, 0);

    var longest = arrs.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });

    return returnMap(longest, arrs);
  }
};
