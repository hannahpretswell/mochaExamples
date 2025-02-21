//delete require.cache[require.resolve('./parallelhooks')]
//const {assert} = require('./parallelhooks')

describe('',  function() {

    const addTwoTogether = function(num1, num2) {
        return num1 + num2;
    }
    //
    before(function () {
        console.log('---> test 4 before, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    // beforeEach(function () {
    //     console.log('---> test 3 beforeEach, mocha worker:', process.env.MOCHA_WORKER_ID)
    // })

    after(function() {
        console.log('---> test 4 after, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    it('test-4', function() {
        console.log('test 4, mocha worker:', process.env.MOCHA_WORKER_ID)
    })
})