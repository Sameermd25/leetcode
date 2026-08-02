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
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr){
        let next = curr.next; // Save next node
        curr.next = prev;     // Reverse the link
        prev = curr;          // Move prev forward
        curr = next;  
    }
    return prev
};