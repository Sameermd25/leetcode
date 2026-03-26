/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map=new Map();
    let st=[];
    for(let i=nums2.length-1;i>=0;i--){
        while(st.length>0 && nums2[i]>=st[st.length-1]){
            st.pop()
        }
        let next=st.length>0?st[st.length-1]:-1
        map.set(nums2[i],next)
        st.push(nums2[i])
    }

    let res=[];
    for(let x of nums1){
        res.push(map.get(x))
    }
    return res
    
};