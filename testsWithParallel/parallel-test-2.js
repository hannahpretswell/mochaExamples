//delete require.cache[require.resolve('./parallelhooks')]
const {assert} = require('./parallelhooks')

describe('', function() {

    const addTwoTogether = function(num1, num2) {
        return num1 + num2;
    }
    //
    before(function () {
        console.log('---> test 2 before, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    // beforeEach(function () {
    //     console.log('---> test 2 beforeEach, mocha worker:', process.env.MOCHA_WORKER_ID)
    // })

    after(function() {
        console.log('---> test 2 after, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    it('test-2', function() {
        console.log('test 2, mocha worker:', process.env.MOCHA_WORKER_ID)
    })
})