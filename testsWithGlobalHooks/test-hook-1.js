const {assert} = require('./hooks')

describe('[DESCRIBE] adding numbers together works', function() {

    const addTwoTogether = function(num1, num2) {
        return num1 + num2;
    }
    //
    before(function () {
        console.log('\nthis is the before hook within the "test-hook-1.js" file\n')
    })

    beforeEach(function () {
        console.log('\nthis is the before each hook within the "test-hook-1.js" file\n')
    })

    after(function() {
        console.log('\nthis is the after hook within the "test-hook-1.js" file\n')
    })

    it('[IT] 3 + 3 should equal 6', function() {
        assert.equal(addTwoTogether(3, 3), 6);
    })

    it('[IT] 4+4 should equal 8', function() {
        assert.equal(addTwoTogether(4,4), 8);
    })
})