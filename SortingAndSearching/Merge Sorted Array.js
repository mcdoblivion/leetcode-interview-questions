/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let insertIndex = 0;
    for (let i = 0; i < n; i++) {
        // pick first element of nums2
        const value = nums2.shift();

        // find insertIndex
        while (
            nums1[insertIndex] <= value &&
            insertIndex < m + n - nums2.length - 1
        ) {
            insertIndex++;
        }

        // switch element after insertIndex
        for (let j = m + n - 1; j > insertIndex; j--) {
            nums1[j] = nums1[j - 1];
        }

        // insert
        nums1[insertIndex] = value;
    }
};
