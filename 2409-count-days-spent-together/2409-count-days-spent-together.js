/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function day(md){
       let [m,d]= md.split("-").map(Number);

        let total = d;

        for (let i = 0; i < m - 1; i++) {
            total += days[i];
        }

        return total;
    }
     
    const start = Math.max(day(arriveAlice), day(arriveBob));
    const end = Math.min(day(leaveAlice), day(leaveBob));

    return Math.max(0, end - start + 1);
};