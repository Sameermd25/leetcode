/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let tank=0;
    let start=0;
    let total=0
    for(let i=0;i<gas.length;i++){
        tank+=gas[i]-cost[i];
        total+=gas[i]-cost[i];
        if(tank<0){
            start=i+1;
            tank=0;
        }
    }
    return total>=0?start:-1;
};