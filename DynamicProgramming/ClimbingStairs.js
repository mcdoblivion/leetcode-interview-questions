/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let count = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    return count[n];
};
