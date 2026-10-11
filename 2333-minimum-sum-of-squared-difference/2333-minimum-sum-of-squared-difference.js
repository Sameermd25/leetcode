var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let k = k1 + k2;
    let diff = new Array(100001).fill(0);
    let maxDiff = 0;
    let total = 0;

    for (let i = 0; i < nums1.length; i++) {
        let d = Math.abs(nums1[i] - nums2[i]);
        diff[d]++;
        maxDiff = Math.max(maxDiff, d);
        total += d;
    }

    if (total <= k) return 0;

    for (let d = maxDiff; d > 0 && k > 0; d--) {
        let moves = Math.min(k, diff[d]);

        diff[d] -= moves;
        diff[d - 1] += moves;
        k -= moves;
    }

    let result = 0;

    for (let d = 1; d <= maxDiff; d++) {
        result += d * d * diff[d];
    }

    return result;
};