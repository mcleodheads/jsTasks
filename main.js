let assert = require('assert')
let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let math = require('mathjs')

// 1 factorial
function factorial(num) {
    if (num < 0 || isNaN(num)) {
        return 0
    }
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}

const arrFactorial = num => num <= 1 ? 1 : num * arrFactorial(num - 1)
// FACTORIAL TESTS


// 2 longest string
function longWord(str) {
    const stringsArr = str.split(' ').sort((a, b) => a.length - b.length)
    return stringsArr[stringsArr.length - 1].length
}

const arrLongWord = str => str.split(' ').reduce((accumulate, current) => Math.max(current.length, accumulate), 0)



// 3 biggest num
function biggestNum(arr) {
    return arr.map(innerArr => innerArr.reduce((accumulate, current) => Math.max(accumulate, current)))
}

const arrBiggestNum = arr => arr.map(innerArr => innerArr.reduce((accumulate, current) => Math.max(accumulate, current)))


// 4 string max length
function stringLength(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}
const arrStringLength = (str, num) => str.length <= num ? str : str.slice(0, num) + '...'


// 5 Register
function changeRegister(str) {
    return str
        .split(' ').map(word => word.toLowerCase().replace(/^./, word => word.toUpperCase())).join(' ')
}

const arrChangeRegister = str => str
    .split(' ').map(word => word.toLowerCase().replace(/^./, word => word.toUpperCase())).join(' ')



// 6 Copy
function inserting(arr1, arr2, num) {
    return [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]
}

const arrInserting = (arr1, arr2, num) => [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]


// 7
function deleteFalsy(arr) {
    return arr.filter(value => !!value)
}
const arrDeleteFalsy = arr => arr.filter(value => !!value)



// 8
function isInclude(arr) {
    const [firstString, secondString] = arr
    return secondString
        .split('')
        .every(letter => new RegExp(letter, 'i').test(firstString))
}

const arrIsInclude = ([firstString, secondString]) => secondString
    .split('').every(letter => new RegExp(letter, 'i').test(firstString))


// 9
function matrix(arr, num) {
    if (arr.length <= num) {
        return [arr]
    }
    return [arr.slice(0, num), ...matrix(arr.slice(num), num)]
}
const arrMatrix = (arr, num) => arr.length <= num ? [arr] : [arr.slice(0, num), ...arrMatrix(arr.slice(num), num)]


// 10
function recursion(arr, num) {
    if (num === 0) {
        return arr
    }
    if (num < 0) {
        return [num, ...recursion([0, 1], num + 1)]
    }
    return [num, ...recursion(arr, num - 1)]
}

const arrRecursion = (arr, num) => num === 0 ? [] : num < 0 ? [num, ...recursion([0, 1], num + 1)] : [num, ...recursion(arr, num - 1)]

module.exports = {
    factorial,
    arrFactorial,
    longWord,
    arrLongWord,
    biggestNum,
    arrBiggestNum,
    stringLength,
    arrStringLength,
    changeRegister,
    arrChangeRegister,
    inserting,
    arrInserting,
    deleteFalsy,
    arrDeleteFalsy,
    isInclude,
    arrIsInclude,
    matrix,
    arrMatrix,
    recursion,
    arrRecursion,
}