/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=[]
    let map={
        ")":"(",
        "]":"[",
        "}":"{"
    }

    for(let i=0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{" ||s[i]=="["){
            arr.push(s[i])
        }
        else{
            let last=arr.pop()
            if(map[s[i]]!=last) return false
        }
    }
    if(arr.length!==0){
        return false
    }
    return true;
};