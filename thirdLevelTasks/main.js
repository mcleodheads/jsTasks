const prompt = require('prompt-sync')()
// 1
function sumAll(arr) {
    const [minVal, maxVal] = arr.sort((a, b) => a - b)
}

// 2
function getUnique(arr1, arr2) {
    return [
        ...arr1.filter(element => !arr2.includes(element)),
        ...arr2.filter(element => !arr1.includes(element))
    ]
}

// 3
function delElements(arr, ...args) {
    const el = arr.filter(element => !args.includes(element))
    arr.splice(0, arr.length, ...el)
}

// 4
function whatIsInAName(array, object) {

}

// 5
function spinalCaseConverter(str) {
    return str.split(' ').join('-')
}

// 6
function wordSwitcher(string, switched, switcher) {
    return string.split(' ').map(word => word === switched ? switcher : word).join(' ')
}

// 7 check this!
function fearNotLetter(str) {

    return undefined
}

// 8
function uniqueInArray(...args) {
    const result = []
    args.map(item => result.push(...item))
    const res = new Set(result)
    return [...res]
}

// 9
function convertSymbols(str) {
    return str.split('')
        .map(symbol => symbol === '<' ? '&lt;' :
            symbol === '>' ? '&gt;' :
                symbol === '&' ? '&amp;' :
                    symbol === '"' ? '&quit;' :
                        symbol === "'" ? '&lsquo;' : symbol)
        .join('')
}

// 10
function isPrime(number) {
    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return number > 1
}
function getPrimes(number) {
    const primes = []
    for (let i = 0; i <= number; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes.reduce((acc, cur) => acc + cur)
}

// 11
function deleteElem(array) {

}

// 12
function steamrollArray(arr) {
    const array = []
    function flatten(arr) {
        arr.forEach(item => {
            if (!Array.isArray(item)) {
                array.push(item)
            } else {
                flatten(item)
            }
        })
    }
    flatten(arr)
    return array
}

// 13
function getSum(...args) {
    const [firstElem, secondElem] = args
    if (args.length > 1) {
        return args.reduce((acc, cur) => acc + cur)
    }
    if (args.length <= 1) {
        const secondElement = prompt('Ожидается второе значение...:')
        return firstElem + parseInt(secondElement)
    }
}

module.exports = {
    sumAll, // 1
    getUnique, // 2
    delElements, // 3
    whatIsInAName, // 4
    spinalCaseConverter, // 5
    wordSwitcher, // 6
    fearNotLetter, // 7
    uniqueInArray, // 8
    convertSymbols, // 9
    getPrimes, // 10
    deleteElem, //11
    steamrollArray, //12
    getSum //13
}