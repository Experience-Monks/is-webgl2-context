var isGL2 = require('./')
var test = require('tape')
var getContext = require('get-canvas-context')

test('whether a canvas context is WebGL2.0', function(t) {
  var ctx1 = getContext('webgl')
  var ctx2 = getContext('webgl2')
  var ctx2d = getContext('2d')

  t.equal(isGL2(), false, 'nil')
  t.equal(isGL2(ctx2d), false, '2d')
  t.equal(isGL2(ctx1), false, 'WebGL1')
  t.equal(isGL2(ctx2), true, 'WebGL2')
  t.end()
})