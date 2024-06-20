const assert = require('assert');

const addTwoTogether = function(num1, num2) {
    return num1 + num2;
}

describe('adding numbers together works', function() {
    it('3 + 3 should equal 6', function() {
        assert.equal(addTwoTogether(3, 3), 7);
    })

    it('4 + 4 should equal 8', function() {
        assert.equal(addTwoTogether(4,4), 8);
    })
})