// Code your solution in this file!
const returnFirstTwoDrivers = function (names) {
    let firstTwoNames = names.slice(0,2);
    return firstTwoNames
} 

const returnLastTwoDrivers = function (names) {
    let lastTwoNames = names.slice(names.length-2);
    return lastTwoNames
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function (fare){
    const doubler = createFareMultiplier(2);
    return doubler(fare) ;

}
fareDoubler(2)
const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(names, functionName){
    return functionName(names);
}
