// const assert = require('assert')
//
// before(async function () {
//     console.log('---> ROOT BEFORE', process.env.MOCHA_WORKER_ID)
// })
//
// // beforeEach(async function () {
// //     console.log('---> ROOT BEFOREEACH', process.env.MOCHA_WORKER_ID)
// // })
//
// after(async function() {
//     console.log('---> ROOT AFTER', process.env.MOCHA_WORKER_ID)
// })
//
// module.exports = {
//     assert
// }

exports.mochaHooks = {
    beforeAll(done) {
        console.log('---> ROOT BEFORE', process.env.MOCHA_WORKER_ID)
        done()
    },

    afterAll(done) {
        console.log('---> ROOT AFTER', process.env.MOCHA_WORKER_ID)
        done()
    }
}