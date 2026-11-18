/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0;

    for (let [numberOfBoxes, unitsPerBox] of boxTypes) {
        if (truckSize === 0) break;
        if(numberOfBoxes<=truckSize){
            totalUnits += numberOfBoxes * unitsPerBox;
            truckSize -=  numberOfBoxes;
        }
        else{
            totalUnits +=unitsPerBox*truckSize;
            truckSize=0;
        }

    }

    return totalUnits;
};