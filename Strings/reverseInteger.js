/**
 * @param {number} x
 * @return {number}
 * -2^31 <= x <= 2^31 - 1
 */
var reverse = function (x) {
    let reverseX = 0;
    const sign = x < 0;
    x = Math.abs(x);
    while (x > 0) {
        const lastDigit = x % 10;
        console.log(lastDigit);
        x = Math.floor(x / 10);
        reverseX = reverseX * 10 + lastDigit;
    }
    return reverseX > Math.pow(2, 31) - 1 ? 0 : sign ? -reverseX : reverseX;
};
