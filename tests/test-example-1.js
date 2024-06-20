const assert = require('assert');

const addTwoTogether = function(num1, num2) {
    return num1 + num2;
}

describe('adding numbers together works', function() {
    it('3 + 3 should equal 6', function() {
        const actual = addTwoTogether(3, 3)
        assert.equal(actual, 6);
    })

    it('4 + 4 should equal 8', function() {
        const actual = addTwoTogether(4, 4)
        assert.equal(actual, 8);
    })
})