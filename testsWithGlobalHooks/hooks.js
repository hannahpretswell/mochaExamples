const { before } = require('mocha');
const assert = require('assert')


before(async function () {
    console.log('\nGlobal before: { \n   this is the global before function. \n   Use the global before for setting up before ALL tests run. \n   An example would be setting up servers. \n }\n')
})

beforeEach(async function () {
    console.log('\nGlobal beforeEach: {\n   this is the global before EACH function. \n   Use the global beforeEach for something that EVERY test requires. \n   Note that the beforeEach runs before every single test in every file. \n}\n')
})

after(async function() {
    console.log('\nGlobal after: {\n   This is the global after function. \n   Use the global after for tearing down after ALL tests are completed. \n}\n')
})

module.exports = {
    assert
}
