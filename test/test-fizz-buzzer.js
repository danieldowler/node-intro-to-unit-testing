const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function () {

    it('should return "fizz-buzz" for multiples of 15', function () {
        [15, 30, 45].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "fizz" for multiples of 3', function () {
        [3, 6, 9, 12].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should return "buzz" for multiples of 5', function () {
        [5, 10, 20].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should return number if not mult of 3 or 5', function () {
        [1, 2, 4, 7].forEach(function (input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });

    it('should throw error if input is not number', function () {
        const badInputs = [true, false, 'string', function () { }, [1, 2, 3]];
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});