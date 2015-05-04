var expect = require('chai').expect
  , is = require('./')

describe('is', function() {
  it('should check function type', function(){
    expect(is.fn(Function)).to.be.equal(true)
    expect(is.fn('function(){})')).to.be.equal(false)
  })

  it('should check string type', function(){
    expect(is.str('5')).to.be.equal(true)
    expect(is.str(5)).to.be.equal(false)
  })

  it('should check number type', function(){
    expect(is.num(5)).to.be.equal(true)
    expect(is.num('5')).to.be.equal(false)
  })

  it('should check object type', function(){
    expect(is.obj({})).to.be.equal(true)
    expect(is.obj([])).to.be.equal(true)
    expect(is.obj('')).to.be.equal(false)
  })

  it('should check truthy', function(){
    expect(is.truthy(true)).to.be.equal(true)
    expect(is.truthy({})).to.be.equal(true)
    expect(is.truthy([])).to.be.equal(true)
    expect(is.truthy(0)).to.be.equal(false)
  })

  it('should check falsy', function(){
    expect(is.falsy(false)).to.be.equal(true)
    expect(is.falsy({})).to.be.equal(false)
    expect(is.falsy([])).to.be.equal(false)
    expect(is.falsy(0)).to.be.equal(true)
  })  

  it('should check array type', function(){
    expect(is.arr([])).to.be.equal(true)
    expect(is.arr({})).to.be.equal(false)
  })  

  it('should check null', function(){
    expect(is.null(undefined)).to.be.equal(false)
    expect(is.null(0)).to.be.equal(false)
    expect(is.null(false)).to.be.equal(false)
    expect(is.null(null)).to.be.equal(true)
  })    

  it('should check if in something', function(){
    expect(is.in(['a','b'])('b')).to.be.ok
    expect(is.in(['a','b'])('c')).to.not.be.ok
    expect(is.in('ab')('b')).to.be.ok
    expect(is.in('ab')('c')).to.not.be.ok
  })  

})