const tasks = require('../main')
let assert = require('assert')
let mocha = require('mocha')
let describe = mocha.describe
let it = mocha.it
let math = require('mathjs')
const {recursion, arrRecursion} = require("../main");

// 1
describe('Factorial', function () {
    function makeTest(number) {
        it(`Факториал ${number} = ${tasks.arrFactorial(number)}`, function () {
            assert.equal(tasks.factorial(number), math.factorial(number))
        });
    }
    it(`Факториал -10 = 0 при отрицательном значении`, function () {
        assert.equal(tasks.factorial(-10), 0)
    });
    it(`Факториал undefined при строковом значении `, function () {
        assert.equal(tasks.factorial('abc'), 0)
    });
    it(`Факториал 0 при undefined`, function () {
        assert.equal(tasks.factorial(undefined), 0)
    });

    for (let i = 1; i < 10; i++) {
        makeTest(i)
    }
})

// 2
describe('Longest string', function () {
    it(`Результат ${tasks.longWord('one two three Krankenhaus four five six seven')} для 'one two three Krankenhaus four five six seven'`, function () {
        assert.equal(tasks.longWord('one two three Krankenhaus four five six seven'), 'Krankenhaus'.length)
    });
    it(`Результат ${tasks.arrLongWord('Ausfahrt Eintreten Säule Übersetzer')} для 'Ausfahrt Eintreten Säule Übersetzer'`, function () {
        assert.equal(tasks.arrLongWord('Ausfahrt Eintreten Säule Übersetzer'), 'Übersetzer'.length)

    });
})

// 3
describe('Biggest number', function () {
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 10]]
    it(`Результат ${tasks.biggestNum(array)} для ${array}`, function () {
        assert.deepEqual(tasks.biggestNum(array), [3,6,10])
    })
    it(`Результат ${tasks.arrBiggestNum(array)} для ${array}`, function () {
        assert.deepEqual(tasks.arrBiggestNum(array), [3,6,10])
    })
})

// 4
describe('String cutter', function () {
    it('"Qwert..." for "Qwertyui"', function () {
        assert.equal(tasks.stringLength('Qwertyui', 5), 'Qwert...')
    });
    it('"Zxc..." for "Zxcvb"', function () {
        assert.equal(tasks.stringLength('Zxcvb', 3), 'Zxc...')
    });
    it('"123456" for "123456"', function () {
        assert.equal(tasks.stringLength('123456', 6), '123456')
    });
})

// 5
describe('Register changer' , function () {
    it('Hola for hOlA', function () {
        assert.equal(tasks.changeRegister('hOlA'), 'Hola')
    });
    it('Headphones for HEadPhoneS', function () {
        assert.equal(tasks.arrChangeRegister('HEadPhoneS'), 'Headphones')
    });
})

// 6
describe('Inserting array into array', function () {
    it('[4,1,2,3,5] for [1,2,3] [4,5]', function () {
        assert.deepEqual(tasks.inserting([1,2,3], [4,5], 1), [4,1,2,3,5])
    });
    it('[4,1,2,3,5] for [1,2,3,4,5,9] [4,5,1,2]', function () {
        assert.deepEqual(tasks.arrInserting([1,2,3,4,5,9], [4,5,1,2], 2), [4,5,1,2,3,4,5,9,1,2])
    });
})

// 7
describe('Deleting falsy elements from array', function () {
    it('[1, "Hi"] for [1, false, "", 0, undefined, "Hi"]', function () {
        assert.deepEqual(tasks.deleteFalsy([1, false, "", 0, undefined, "Hi"]), [1, "Hi"])
    });
    it('[4, "Uno"] for [1, false, "", 0, undefined, "Hi"]', function () {
        assert.deepEqual(tasks.arrDeleteFalsy([4, false, "", 0,  "Uno"]), [4, "Uno"])
    });
    it('[true] for [true]', function () {
        assert.deepEqual(tasks.arrDeleteFalsy([true]), [true])
    });
})

// 8
describe('First elem include second elem', function () {
    it('True for ["Hola","aloha"]', function () {
        assert.equal(tasks.isInclude(['Hola','aloha']), true)
    });
    it('False for ["Hola","alhazavr"]', function () {
        assert.equal(tasks.arrIsInclude(['Hola','alhazavr']), false)
    });
    it('False for [\'12345\',\'12,34,56\']', function () {
        assert.equal(tasks.arrIsInclude(['12345','12,34,56']), false)
    });
})

// 9
describe('Matrix for array', function () {
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5,6,7,8,9], 3)', function () {
        assert.deepEqual(tasks.matrix([1,2,3,4,5,6,7,8,9], 3), [[1,2,3],[4,5,6],[7,8,9]])
    });
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
        assert.deepEqual(tasks.arrMatrix([1,2,3,4,5,6], 2), [[1,2],[3,4],[5,6]])
    });
    it('[[1,2,3],[4,5,6],[7,8,9]] for matrix([1,2,3,4,5], 3)', function () {
        assert.deepEqual(tasks.arrMatrix([1,2,3,4,'asdb'], 3), [[1,2,3],[4,'asdb']])
    });
})

// 10
describe('recursion for array', function () {
    it('[9,8,7,6,5,4,3,2,1] for recursion([], 9)', function () {
        let myArray = []
        tasks.recursion(myArray, 9);
        assert.deepEqual(myArray, [9,8,7,6,5,4,3,2,1])
    });
    it('[4,3,2,1] for recursion([], 4)', function () {
        let myArray = []
        tasks.recursion(myArray, 4);
        assert.deepEqual(myArray, [4,3,2,1])
    });
    it('asdasd', function () {
        let myArray = []
        tasks.recursion(myArray, 10);
        assert.deepEqual(myArray, [10,9,8,7,6,5,4,3,2,1])
    })
})