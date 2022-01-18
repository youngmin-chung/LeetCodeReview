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
var middleNode = function(head) {
    var headSize = size(head)
    
    if(headSize % 2 == 0){
        return middle(head)
    }else {
        return middle(head)
    }
};

var size = function(head) {
    let count = 0; 
    let node = head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

var middle = function(head) 
    {
   var slow_ptr = head;
   var fast_ptr = head;
        if (head != null)
        {
            while (fast_ptr != null && fast_ptr.next != null) 
            {
                fast_ptr = fast_ptr.next.next;
                slow_ptr = slow_ptr.next;
            }
       
        }
         return slow_ptr;
    }