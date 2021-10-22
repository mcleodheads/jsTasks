// 1 factorial
function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num + factorial(num - 1)
}
console.log(`1.`)
console.log(factorial(5))


// 2 longest string
function longWord(str) {
    const stringsArr = str.split(' ').sort((a, b) => a.length - b.length)
    return stringsArr[stringsArr.length - 1].length
}
console.log('2.')
console.log(longWord('lvalue tttt ttt ff f'))


// 3 biggest num
const biggestNum = arr => arr.map(innerArr => innerArr.reduce((accumulate, current) => Math.max(accumulate, current)))

console.log(`3.`)
console.log(biggestNum([[1, 2, 11, 3], [4, 80, 5], [6, 7, 8, 9, 4]]))

// 4 string max length
const stringLength = (str, num) => str.slice(0, num) + '...'

console.log(`4.`)
console.log(stringLength('qwertyuiop', 5))

// 5 Register
const changeRegister = str => str.split(' ').map(word => word.toLowerCase().replace(/^./, word => word.toUpperCase())).join(' ')

console.log(`5.`)
console.log(changeRegister('raz dVa TrI CHETIRE'))


// 6 Copy
const arrayInserting = (arr1, arr2, num) => [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]

console.log(`6.`)
console.log(arrayInserting([1,2], [3,4,5], 2))

// 7
const deleteFalsy = arr => arr.filter(value => !!value)

console.log(`7. Deleting falsy values from array [false, true, 0, '', "", undefined, null, NaN, 1]:`)
console.log(deleteFalsy([false, true, 0, '', "", undefined, null, NaN, 1]))

// 8
const arrInclude = (arr) => {
    const [firstString, secondString] = arr
    return secondString
        .split('')
        .every(letter => new RegExp(letter, 'i').test(firstString))
}
console.log(`8.`)
console.log(arrInclude(['aloha', 'hola']))

// 9
const matrix = (arr, num) => {
    if (arr.length < num) {
        return arr
    }
    return [arr.slice(0, num), ...matrix(arr.slice(num), num)]
}
console.log(`9.`)
console.log(matrix([1,2,3,4,5,6,7,8,9,10], 2))

// 10
const recursion = (arr, num) => num <= 0 ? arr : [num, ...recursion(arr, num - 1)]

console.log(`10. `)
console.log(recursion([], 4))