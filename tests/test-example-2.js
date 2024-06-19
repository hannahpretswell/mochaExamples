const assert = require('assert');

const checkNumberIsOkay = function(num) {
    if(num === 3) {
        return `number ${num} is not okay`
    }

    if(num > 10 ) {
        return `number ${num} is doing great!`
    }

    if(num <= 10) {
        return `number ${num} is okay`
    }
}

describe('The number is okay', function() {
    it('should be great if its over 10', function() {
        assert.equal(checkNumberIsOkay(11), 'number 11 is doing great!')
    })
    it('should be okay if its equal to 10', function() {
        assert.equal(checkNumberIsOkay(10), 'number 10 is okay')
    })
    it('should be okay if its under 10', function() {
        assert.equal(checkNumberIsOkay(3), 'number 3 is okay')
    })
})
