/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num<0){
        num+=Math.pow(2,32)
    }
    if(num==0) return "0"
    let hex={10:"a",11:"b",12:"c",13:"d",14:"e",15:"f"};

    let res="";
    while(num>0){
        let rem=num%16;
        if(rem<10){
            res=rem+res
        }
        else{
            res=hex[rem]+res
        }
        num=Math.floor(num/16)
    }
    return res
};