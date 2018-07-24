const {assert} = require('chai')
const {pathFromIndex} = require('../lib/index.js')

describe('pathFromIndex', function () {
  it('should substitute into "x + n" paths', function () {
    assert.equal(pathFromIndex("m/44'/60'/x + 5'/0/0", 12), "m/44'/60'/17'/0/0")
    assert.equal(pathFromIndex("m/44'/60'/1'/0/x+2", 9), "m/44'/60'/1'/0/11")
    assert.equal(pathFromIndex("m/44'/60'/1'/x +3/x+2", 4), "m/44'/60'/1'/7/6")
  })
  it('should substitute into "x" paths', function () {
    assert.equal(pathFromIndex("m/44'/60'/x'/0/0", 12), "m/44'/60'/12'/0/0")
    assert.equal(pathFromIndex("m/44'/60'/2'/0/x", 3), "m/44'/60'/2'/0/3")
  })
  it('should fall back to substituting the last component if no "x"\'s are present', function () {
    assert.equal(pathFromIndex("m/44'/60'/12'/0/0", 4), "m/44'/60'/12'/0/4")
    assert.equal(pathFromIndex("m/44'/60'/11'/0/3", 8), "m/44'/60'/11'/0/11")
    assert.equal(pathFromIndex("m/600'/60'/0'", 7), "m/600'/60'/7'")
    assert.equal(pathFromIndex("m/600'/60'/5'", 12), "m/600'/60'/17'")
  })
})
