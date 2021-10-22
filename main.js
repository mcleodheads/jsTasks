// 1 factorial
function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num + factorial(num - 1)
}
console.log(`1. Factorial of 5: ${factorial(5)}`)


// 2 longest string
function longWord(str) {
    const arr = str.split(' ').sort((a, b) => a.length - b.length)
    return arr[arr.length - 1].length
}
console.log(`2. Length of the longest string 'ooooo tttt ttt ff f': ${longWord('ooooo tttt ttt ff f')}`)


// 3 biggest num
const biggestNum = arr => arr.map(innerArr => innerArr.reduce((acc, cur) => Math.max(acc, cur)))

console.log(`3. Biggest number inside arrays [[1, 2, 11, 3], [4, 80, 5], [6, 7, 8, 9, 4]]:`)
console.log(biggestNum([[1, 2, 11, 3], [4, 80, 5], [6, 7, 8, 9, 4]]))

// 4 string max length
const stringLength = (str, num) => str.slice(0, num) + '...'

console.log(`4. String cutter (5 symbols): ${stringLength('qwertyuiop', 5)}`)

// 5 Register
const changeRegister = str => str.split(' ').map(item => item.toLowerCase()).join(' ')

console.log(`5. Change word first letter to uppercase, other letters to lowercase: ${changeRegister('raz dVa TrI')}`)


// 6 Copy
const arrayInserting = (arr1, arr2, num) => [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]

console.log(`6. Insert array[1,2] inside other array[3,4,5] by index 2: `)
console.log(arrayInserting([1,2], [3,4,5], 2))

// 7
const deleteFalsy = arr => arr.filter(item => !!item)

console.log(`7. Deleting falsy values from array [false, true, 0, '', "", undefined, null, NaN, 1]:`)
console.log(deleteFalsy([false, true, 0, '', "", undefined, null, NaN, 1]))

// 8
const arrInclude = (arr) => {
    const [firstElement, secondElement] = arr
    return secondElement
        .split('')
        .every(letter => new RegExp(letter, 'i').test(firstElement))
}
console.log(`8. Does array first string ('aloha') contain letters from second string ('hola'): ${arrInclude(['aloha', 'hola'])}`)

// 9
const matrix = (arr, num) => {
    if (arr.length < num) {
        return arr
    }
    return [arr.slice(0, num), ...matrix(arr.slice(num), num)]
}
console.log(`9. Grouping of array elements:`)
console.log(matrix([1,2,3,4,5,6,7,8,9,10], 2))

// 10
const recursion = (arr, num) => num <= 0 ? arr : [num, ...recursion(arr, num - 1)]

console.log(`10. Recursively adding items to a array: `)
console.log(recursion([], 4))