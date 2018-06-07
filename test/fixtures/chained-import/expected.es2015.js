'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-module'));
}).then(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('test-module-2'));
  });
});

Promise.all([Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-1'));
}), Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-2'));
}), Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-3'));
})]).then(function () {});
