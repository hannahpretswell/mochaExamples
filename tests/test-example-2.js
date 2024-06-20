const assert = require('assert');

const addTwoTogether = function(num1, num2) {
    return num1 + num2;
}

describe('adding numbers together works', function() {

    before(function () {
        console.log('this is the before hook')
    })

    beforeEach(function () {
        console.log('this is the before each hook')
    })

    after(function() {
        console.log('this is the after hook')
    })

    it('3 + 3 should equal 6', function() {
        assert.equal(addTwoTogether(3, 3), 6);
    })

    it('4+4 should equal 8', function() {
        assert.equal(addTwoTogether(4,4), 8);
    })

    describe('adding 3 numbers together works', function() {
        //before(function () {})
        it('3 + 3 + 3 should equal 9', function() {
            let actual = 3+3+3
            assert.equal(actual, 9);
        })

        it('4+4+ 4 should equal 12', function() {
            let actual = 4+4+4
            assert.equal(actual, 12);
        })
    })
})