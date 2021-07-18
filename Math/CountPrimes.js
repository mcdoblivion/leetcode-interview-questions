/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(1);
    arr[0] = 0;
    arr[1] = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = 2; j * i <= n; j++) arr[j * i] = 0;
        }
    }

    return arr.filter((element) => element === 1).length;
};
