/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const s2 = s.split('').sort().join('')
    const t2 = t.split('').sort().join('')
    return s2 === t2
}
