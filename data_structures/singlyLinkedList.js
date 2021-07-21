// singly linked list

// a linked list is simply a collection of nodes that point from one end 
// to another in sequence, the next of one node points to the next node, etc. 

class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
  }
}

// an SLL must have a head and a tail and a length 
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

  // print out the entire list  
  traversePrint() {
    let current = this.head
    // while there is a current 
    while( current ) {
      console.log( current.val );
      current = current.next; // on to the next node, then next, etc
    }
  }
  
  // POP removes the node at the END of the list. 
  // 
  // What's tricky about POP on an SLL is that we need to keep 
  // a 'previous variable', one b4 old tail,  in this case 'newTail' in order to 
  // determine what the new tail is going to be
  pop() {
    if( !this.head ) return undefined; 
    
    // at beginnig of list current and newTail (one before) are the same
    let current = this.head;
    let newTail = current;  
    
    // while there is a next, i.e. go to tail 
    // this loop ensures that newTail will always be one before current 
    while( current.next ) {
      newTail = current; 
      current = current.next; // current will always end up one after newTail 
    }
    // now we go through the process of making newTail as the tail, and returning 
    // current. 
    this.tail = newTail; // the new tail is now one before the old tail 
    this.tail.next = null; // sever the connection to the old tail
    this.length--; // decrement the list length by 1

    // special case if we're popping off the final value
    if( this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current; 
  }

  // shift: removing from the front of the list
  // get the head value, delete the head, move the head to next node
  shift() {
    if( !this.head ) return undefined;
    
    let returnedItem = this.head;
    this.head = this.head.next; 
    this.length--;
    return returnedItem;
  
  }




}


var list1 = new SinglyLinkedList()

list1.push("Hello");
list1.push("and");
list1.push("goodbye");
list1.push(447);

// console.log(list1);

// list1.traversePrint();

// console.log(list1.pop())
// console.log(list1.pop())
// console.log(list1.pop())
// console.log(list1.pop())
// console.log(list1.pop())
// console.log(list1.pop())
// console.log(list1.pop())

// console.log(list1);

console.log( list1.shift() );
console.log( list1.shift() );
console.log( list1.shift() );
console.log( list1.shift() );