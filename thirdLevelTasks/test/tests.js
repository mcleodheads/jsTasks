const tasks = require('../main')
let assert = require('assert')
let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let prompt = require('prompt-sync')

// 1.sumAll
describe('sumAll' , function () {
    it('Sum of all numbers between [4,1] = 10', function () {
        assert.equal(tasks.sumAll([4,1]), 10)
    })
})

// 2.getUnique
describe('getUnique', function () {
    it('', function () {
        assert.deepEqual(getUnique([1,2,3], [2,3,4]), [1,4])
    })
})

// 3.delElements
describe('delElements', function () {
    it('Delete elements from array, that args doesnt contain', function () {
        const myArray = [1,2,3,4,5]
        tasks.delElements(myArray, 1,2,3)
        assert.deepEqual(myArray, [4,5])
    })
})

// 5.spinalCaseConverter
describe('spinalCaseConverter', function() {
    it('Convert string "A b c d" to "A-b-c-d"', function () {
        assert.equal(tasks.spinalCaseConverter('A b c d'), 'A-b-c-d')
    })
})

// 6.wordSwitcher
describe('wordSwitcher', function () {
    it('Swap word in string', function () {
        assert.equal(tasks.wordSwitcher('qwerty asd zxc', 'qwerty', 'rty'), 'rty asd zxc')
    })
})

// 7.fearNotLetter
describe('fearNotLetter', function () {
    it('Check letters in string', function () {
        assert.equal(tasks.fearNotLetter('abce'), 'd')
    })
    it('Check letters in string', function () {
        assert.equal(tasks.fearNotLetter('abc'), undefined)
    })
})

// 8.uniqueInArray
describe('uniqueInArray', function () {
    it('Get set from collections of arrays', function () {
        assert.deepEqual(tasks.uniqueInArray([1,2,3], [2,3,4], [5,6,1]), [1,2,3,4,5,6])
    })
})

// 9.convertSymbols
describe('convertSymbols', function () {
    it('Convert symbols to HTML-code', function () {
        assert
            .equal(tasks.convertSymbols(`<randomText>, ', ", &`), '&lt;randomText&gt;, &lsquo;, &quit;, &amp;')
    })
})

// 10.getPrimes
describe('getPrimes', function () {
    it('Get sum of prime numbers from n to 0', function () {
        assert.equal(tasks.getPrimes(7), 17)
    })
})

// 12.steamrollArray
describe('steamrollArray', function () {
    it ('Steam roll array', function () {
        assert.deepEqual(tasks.steamrollArray([1,[2,[3,[4]]]]), [1,2,3,4])
    })
})

// 13.getSum
describe('getSum', () => {
    it('Get sum of 2 args', function () {
        assert.equal(tasks.getSum(1,5), 6)
    })
    it('Wait for second argument', async() => {
        const value = await prompt.get('Insert value for second argument: ')
        assert.equal(tasks.getSum(1, value), 1 + parseInt(value))
    })
})