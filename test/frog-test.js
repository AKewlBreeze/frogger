var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog');

describe('Frog', function() {

  it('should be a function', function () {
    assert.isFunction(Frog);
  });

  it('should instantiate our good friend, frog', function () {
    var canvas = document.getElementById('game');
    var frog = new Frog(null, null, null, null, null, canvas);
     assert.isObject(frog);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var frog = new Frog(15);
    assert.equal(frog.x, 15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var frog = new Frog(15, 30);
    assert.equal(frog.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function () {
    var frog = new Frog(15, 30, 50);
    assert.equal(frog.width, 50);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function () {
    var frog = new Frog(15, 30, 50, 80);
    assert.equal(frog.height, 80);
  });

  it('should take a fifth arguement and set it as the "direction" property of the instantiated object', function () {
    var frog = new Frog(15, 30, 50, 80, 'right');
    assert.equal(frog.direction, 'right');
  });

  it('should take a sixth arguement and set it as the "canvas" property of the instantiated object', function () {
    var frog = new Frog(15, 30, 50, 80, 'right');
    assert.equal(frog.canvas);
  });

  it.skip('"move()" should increment the "x" property by 1', function () {
    var frog = Frog(50, 30, 50, 80, 'right');
    this.move();
    assert.equal(frog.x, 51);
  });

});
