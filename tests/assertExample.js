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

//run this file using node tests/assertExample.js
//this example is just to show that you can still run tests without a framework like mocha, but using mocha helps with test grouping and

assert.equal(checkNumberIsOkay(11), 'number 11 is doing great!')
assert.equal(checkNumberIsOkay(10), 'number 10 is okay')
assert.equal(checkNumberIsOkay(3), 'number 3 is okay')
