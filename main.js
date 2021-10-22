// 1 factorial
function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num + factorial(num - 1)
}

// 2 longest string
function longWord(str) {
    const arr = str.split(' ').sort((a, b) => a.length - b.length)
    return arr[arr.length - 1].length
}


// 3 biggest num
const biggestNum = arr => arr.map(innerArr => innerArr.reduce((acc, cur) => Math.max(acc, cur)))


// 4 string max length
const stringLength = (str, num) => str.slice(0, num) + '...'


// 5 Register
function changeRegister(str) {
    return str.split(' ').map(item => item.toLowerCase()).join(' ')
}
console.log(changeRegister('raz dVa TrI'))


// 6 Copy
const Copy = (arr1, arr2, num) => [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]


// 7
const deleteFalsy = arr => arr.filter(item => !!item)

// 8
const arrInclude = (arr) => {
    const [firstElement, secondElement] = arr
    return secondElement
        .split('')
        .map(letter => new RegExp(letter, 'i')
            .test(firstElement))
}

// 9
const matrix = (arr, num) => {
    if (arr.length < num) {
        return arr
    }
    return [arr.slice(0, num), ...matrix(arr.slice(num), num)]
}

// 10
const recursion = (arr, num) => num <= 0 ? arr : [num, ...recursion(arr, num - 1)]
console.log(recursion([], 9))