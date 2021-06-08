// singly linked list

class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0; 
  }

  push(val) {
    let newNode = new Node(val);

    // empty list, head and tail point to newNode
    if( !this.head ) {
      this.head = newNode; 
      this.tail = this.head; 
    } else {
      // set next property (pointer) of tail to be the new node
      // and set tail property of the list to be the new node 
      this.tail.next = newNode; 
      this.tail = newNode; // our new tail 
    }
    this.length++; // increment length
    return this;  // return list 

  }

}

var list1 = new SinglyLinkedList()

list1.push("Hello");
list1.push("and");
list1.push("goodbye");


console.log(list1.head);
console.log(list1.head.next);
console.log(list1.head.next.next);


console.log(list1);