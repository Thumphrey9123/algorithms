var mergeTwoLists = function(l1, l2) {
    let head = ""
    let curr = ""
    if(!l1) return l2
    if(!l2) return l1
    if(l1.val < l2.val){
        head = l1
        l1 = l1.next
    } else {
        head = l2
        l2 = l2.next
    }
    curr = head
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1
            curr = curr.next
            l1 = l1.next
        } else {
            curr.next = l2
            curr = curr.next
            l2 = l2.next
        }
    }
    l1 ? curr.next = l1 : curr.next = l2
    return head
};