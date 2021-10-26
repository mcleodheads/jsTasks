const firstLevel = require('../firstLevelTasks/main')
const thirdLevel = require('../thirdLevelTasks/main')
let assert = require('assert')
let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let math = require('mathjs')
let prompt = require('prompt-sync')()

// First Level Tasks
// 1
describe('First level tasks', function () {
    describe('Factorial', function () {
        function makeTest(number) {
            it(`Факториал ${number} = ${firstLevel.arrFactorial(number)}`, function () {
                assert.equal(firstLevel.factorial(number), math.factorial(number))
            });
        }
        it(`Факториал -10 = 0 при отрицательном значении`, function () {
            assert.equal(firstLevel.factorial(-10), 0)
        });
        it(`Факториал undefined при строковом значении `, function () {
            assert.equal(firstLevel.factorial('abc'), 0)
        });
        it(`Факториал 0 при undefined`, function () {
            assert.equal(firstLevel.factorial(undefined), 0)
        });

        for (let i = 1; i < 10; i++) {
            makeTest(i)
        }
    })

// 2
    describe('Longest string', function () {
        it(`Результат ${firstLevel.longWord('one two three Krankenhaus four five six seven')} для 'one two three Krankenhaus four five six seven'`, function () {
            assert.equal(firstLevel.longWord('one two three Krankenhaus four five six seven'), 'Krankenhaus'.length)
        });
        it(`Результат ${firstLevel.arrLongWord('Ausfahrt Eintreten Säule Übersetzer')} для 'Ausfahrt Eintreten Säule Übersetzer'`, function () {
            assert.equal(firstLevel.arrLongWord('Ausfahrt Eintreten Säule Übersetzer'), 'Übersetzer'.length)

        });
    })

// 3
    describe('Biggest number', function () {
        let array = [[1, 2, 3], [4, 5, 6], [7, 8, 10]]
        it(`Результат ${firstLevel.biggestNum(array)} для ${array}`, function () {
            assert.deepEqual(firstLevel.biggestNum(array), [3,6,10])
        })
        it(`Результат ${firstLevel.arrBiggestNum(array)} для ${array}`, function () {
            assert.deepEqual(firstLevel.arrBiggestNum(array), [3,6,10])
        })
    })

// 4
    describe('String cutter', function () {
        it('"Qwert..." for "Qwertyui"', function () {
            assert.equal(firstLevel.stringLength('Qwertyui', 5), 'Qwert...')
        });
        it('"Zxc..." for "Zxcvb"', function () {
            assert.equal(firstLevel.stringLength('Zxcvb', 3), 'Zxc...')
        });
        it('"123456" for "123456"', function () {
            assert.equal(firstLevel.stringLength('123456', 6), '123456')
        });
    })

// 5
    describe('Register changer' , function () {
        it('Hola for hOlA', function () {
            assert.equal(firstLevel.changeRegister('hOlA'), 'Hola')
        });
        it('Headphones for HEadPhoneS', function () {
            assert.equal(firstLevel.arrChangeRegister('HEadPhoneS'), 'Headphones')
        });
    })

// 6
    describe('Inserting array into array', function () {
        it('[4,1,2,3,5] for [1,2,3] [4,5]', function () {
            assert.deepEqual(firstLevel.inserting([1,2,3], [4,5], 1), [4,1,2,3,5])
        });
        it('[4,1,2,3,5] for [1,2,3,4,5,9] [4,5,1,2]', function () {
            assert.deepEqual(firstLevel.arrInserting([1,2,3,4,5,9], [4,5,1,2], 2), [4,5,1,2,3,4,5,9,1,2])
        });
    })

// 7
    describe('Deleting falsy elements from array', function () {
        it('[1, "Hi"] for [1, false, "", 0, undefined, "Hi"]', function () {
            assert.deepEqual(firstLevel.deleteFalsy([1, false, "", 0, undefined, "Hi"]), [1, "Hi"])
        });
        it('[4, "Uno"] for [1, false, "", 0, undefined, "Hi"]', function () {
            assert.deepEqual(firstLevel.arrDeleteFalsy([4, false, "", 0,  "Uno"]), [4, "Uno"])
        });
        it('[true] for [true]', function () {
            assert.deepEqual(firstLevel.arrDeleteFalsy([true]), [true])
        });
    })

// 8
    describe('First elem include second elem', function () {
        it('True for ["Hola","aloha"]', function () {
            assert.equal(firstLevel.isInclude(['Hola','aloha']), true)
        });
        it('False for ["Hola","alhazavr"]', function () {
            assert.equal(firstLevel.arrIsInclude(['Hola','alhazavr']), false)
        });
        it('False for [\'12345\',\'12,34,56\']', function () {
            assert.equal(firstLevel.arrIsInclude(['12345','12,34,56']), false)
        });
    })

// 9
    describe('Matrix for array', function () {
        it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5,6,7,8,9], 3)', function () {
            assert.deepEqual(firstLevel.matrix([1,2,3,4,5,6,7,8,9], 3), [[1,2,3],[4,5,6],[7,8,9]])
        });
        it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
            assert.deepEqual(firstLevel.arrMatrix([1,2,3,4,5,6], 2), [[1,2],[3,4],[5,6]])
        });
        it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
            assert.deepEqual(firstLevel.arrMatrix([1,2,3,4,'asdb'], 3), [[1,2,3],[4,'asdb']])
        });
    })

// 10
    describe('recursion for array', function () {
        it('[9,8,7,6,5,4,3,2,1] for recursion([], 9)', function () {
            let myArray = []
            firstLevel.recursion(myArray, 9);
            assert.deepEqual(myArray, [9,8,7,6,5,4,3,2,1])
        });
        it('[4,3,2,1] for recursion([], 4)', function () {
            let myArray = []
            firstLevel.recursion(myArray, 4);
            assert.deepEqual(myArray, [4,3,2,1])
        });
        it('asdasd', function () {
            let myArray = []
            firstLevel.recursion(myArray, 10);
            assert.deepEqual(myArray, [10,9,8,7,6,5,4,3,2,1])
        })
    })
})

// Third Level Tasks
describe('Third level task', function () {
    // 1.sumAll
    describe('sumAll' , function () {
        it('Sum of all numbers between [4,1] = 10', function () {
            assert.equal(thirdLevel.sumAll([4,1]), 10)
        })
    })

// 2.getUnique
    describe('getUnique', function () {
        it('', function () {
            assert.deepEqual(thirdLevel.getUnique([1,2,3], [2,3,4]), [1,4])
        })
    })

// 3.delElements
    describe('delElements', function () {
        it('Delete elements from array, that args doesnt contain', function () {
            const myArray = [1,2,3,4,5]
            thirdLevel.delElements(myArray, 1,2,3)
            assert.deepEqual(myArray, [4,5])
        })
    })

// 4.whatIsInAName
    describe('whatIsInAName', function() {
        it('Get objects from array, that contain object', function () {
            assert.deepEqual(thirdLevel.whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
                { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }), [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ])
        })
    })

// 5.spinalCaseConverter
    describe('spinalCaseConverter', function() {
        it('Convert string "A b c d" to "A-b-c-d"', function () {
            assert.equal(thirdLevel.spinalCaseConverter('A b c d'), 'A-b-c-d')
        })
    })

// 6.wordSwitcher
    describe('wordSwitcher', function () {
        it('Swap word in string', function () {
            assert.equal(thirdLevel.wordSwitcher('qwerty asd zxc', 'qwerty', 'rty'), 'rty asd zxc')
        })
    })

// 7.fearNotLetter
    describe('fearNotLetter', function () {
        it('Check letters in string', function () {
            assert.equal(thirdLevel.fearNotLetter('abce'), 'd')
        })
        it('Check letters in string', function () {
            assert.equal(thirdLevel.fearNotLetter('abc'), undefined)
        })
    })

// 8.uniqueInArray
    describe('uniqueInArray', function () {
        it('Get set from collections of arrays', function () {
            assert.deepEqual(thirdLevel.uniqueInArray([1,2,3], [2,3,4], [5,6,1]), [1,2,3,4,5,6])
        })
    })

// 9.convertSymbols
    describe('convertSymbols', function () {
        it('Convert symbols to HTML-code', function () {
            assert
                .equal(thirdLevel.convertSymbols(`<randomText>, ', ", &`), '&lt;randomText&gt;, &lsquo;, &quit;, &amp;')
        })
    })

// 10.getPrimes
    describe('getPrimes', function () {
        it('Get sum of prime numbers from n to 0', function () {
            assert.equal(thirdLevel.getPrimes(7), 17)
        })
    })

// 11.dropElements
    describe('dropElements', function () {
        it('Drop elements from array until function return true', function () {
            assert.deepEqual(thirdLevel.dropElements([1,2,3,4], n => n >= 3), [3,4])
        })
    })

// 12.steamrollArray
    describe('steamrollArray', function () {
        it ('Steam roll array', function () {
            assert.deepEqual(thirdLevel.steamrollArray([1,[2,[3,[4]]]]), [1,2,3,4])
        })
    })

// 13.getSum
    describe('getSum', () => {
        it('Get sum of 2 args', function () {
            assert.equal(thirdLevel.getSum(1,5), 6)
        })
        it('Wait for second argument', () => {
            const value = prompt('Insert value for second argument: ')
            assert.equal(thirdLevel.getSum(0, parseInt(value)), parseInt(value) + 0)
        })
    })
})
