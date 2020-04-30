const INPUT_NUMBER = 19
let IS_HAPPY = false

const splitNumberIntoArrayOfDigits = (num: number) => num.toString().split('').map((digit: string) => parseInt(digit))

const squareEachDigitOfNumber = (digitArray: number[]) => digitArray.map((digit: number) => digit * digit)

const getSumOfEachSquaredDigit = (squaredDigitArray: number[]) => squaredDigitArray.reduce((acc: number, currentValue: number) => acc + currentValue, 0)

const digitArray = splitNumberIntoArrayOfDigits(INPUT_NUMBER)

const digitArraySquared = squareEachDigitOfNumber(digitArray)

const sumOfSquaredDigits = getSumOfEachSquaredDigit(digitArraySquared)

if(sumOfSquaredDigits === 1)
    IS_HAPPY = true
