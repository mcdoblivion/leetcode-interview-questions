/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const steps = k % nums.length
    let arr = nums.slice(-steps)

    for (let i = nums.length - 1; i >= steps; i--) {
        nums[i] = nums[i - steps]
    }

    for (let i = 0; i < steps; i++) {
        nums[i] = arr[i]
    }
}
