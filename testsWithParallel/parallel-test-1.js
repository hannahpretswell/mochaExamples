//delete require.cache[require.resolve('./parallelhooks')]
const {assert} = require('./parallelhooks')

describe('', function() {

    const addTwoTogether = function(num1, num2) {
        return num1 + num2;
    }
    //
    before(function () {
        console.log('---> test 1 before, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    // beforeEach(function () {
    //     console.log('---> test 1 beforeEach, mocha worker:', process.env.MOCHA_WORKER_ID)
    // })

    after(function() {
        console.log('---> test 1 after, mocha worker:', process.env.MOCHA_WORKER_ID)
    })

    it('test-1', function() {
        console.log('test 1, mocha worker: ', process.env.MOCHA_WORKER_ID)
    })
})