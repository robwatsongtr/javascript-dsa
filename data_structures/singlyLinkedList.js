// singly linked list

// a linked list is simply a collection of nodes that point from one end 
// to another in sequence, the next of one node points to the next node, etc. 


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

  // push adds a node to the end of the list 
  push(val) {
    // make a new node and pass in the val 
    let newNode = new Node(val);

    // empty list, head and tail point to newNode
    if( !this.head ) {
      this.head = newNode; 
      this.tail = this.head; 
    } else {
      // set next property (pointer) of tail to be the new node
      this.tail.next = newNode; 
      // set tail property of the list to be the new node 
      this.tail = newNode; // our new tail 
    }
    this.length++; // increment length of list 
    return this;  // return list 
  }

  traversePrint() {
    let current = this.head
    while( current ) {
      console.log( current.val );
      current = current.next;  
    }
  }
  
  // pop removes the node at the end of the list. 
  pop() {

  }


}


var list1 = new SinglyLinkedList()

list1.push("Hello");
list1.push("and");
list1.push("goodbye");
list1.push(447);

list1.traversePrint();