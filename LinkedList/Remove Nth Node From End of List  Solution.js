/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // if LinkedList has only one node
    if (!head.next) return null;

    let listLength = 2;
    let current = head.next;

    // find LinkedList length
    while (current.next) {
        listLength++;
        current = current.next;
    }

    current = head;

    // if node will be removed is head, return head.next
    if (n === listLength) return head.next;

    // iterate to the node previous the node will be removed
    for (let i = 1; i < listLength - n; i++) {
        current = current.next;
    }

    // remove node
    current.next = current.next.next;

    return head;
};
