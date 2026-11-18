/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let totalBoats=0;
    let l=0;
    let r=people.length-1;
    while(l<=r){
        if(people[l]+people[r]<=limit){
            l++
        }
        r--;
        totalBoats++;
    }
    return totalBoats
};