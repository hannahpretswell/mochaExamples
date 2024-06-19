const {assert} = require("./hooks");

describe('[DESCRIBE] multiplying numbers together works', function() {

    const multiplication = function(num1, num2) {
        return num1 * num2;
    }
    //
    before(function () {
        console.log('\nthis is the before hook within the "test-hook-2.js" file\n')
    })

    beforeEach(function () {
        console.log('\nthis is the before each hook within the "test-hook-2.js" file\n')
    })

    after(function() {
        console.log('\nthis is the after hook within the "test-hook-2.js" file\n')
    })

    it('[IT] 3 x3 = 9', function() {
        assert.equal(multiplication(3, 3), 9);
    })

    it('[IT] 4x4 = 16', function() {
        assert.equal(multiplication(4,4), 16);
    })

    describe('[DESCRIBE] adding 3 numbers together works', function() {
        before(function() {
            console.log('\nbefore within a nested describe\n')
        })
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