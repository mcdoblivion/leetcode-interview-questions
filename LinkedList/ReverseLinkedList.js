/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     let newHead = null
//     let current = head

//     while (current) {
//         const next = current.next
//         current.next = newHead
//         newHead = current
//         current = next
//     }

//     return newHead
// }

// recursive solution
var reverseList = function (head) {
    if (!head || !head.next) return head

    const newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
