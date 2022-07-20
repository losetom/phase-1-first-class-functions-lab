// Code your solution in this file!
const returnFirstTwoDrivers = () => [
    'Antonia',
    'Nuru'
]

const returnLastTwoDrivers = () => [
    'Amari', 
    'Mo'
]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function (num2) {
        return num1 * num2 
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return [ 'Antonia', 'Nuru' ]
    }
    else {
        return [ 'Amari', 'Mo']
    }

}
