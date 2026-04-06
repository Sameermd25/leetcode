/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let a1=version1.split(".")
    let a2=version2.split(".")
    for(let i=0;i<a1.length || i<a2.length;i++){
        let x=i<a1.length?parseInt(a1[i]):0
        let y=i<a2.length?parseInt(a2[i]):0
        if(x<y){
            return -1
        }
        if(x>y){
            return 1;
        }
    }
    return 0;
};