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


  // PUSH adds a node to the END of the list 
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


  // SHIFT: removing from the BEGINNING of the list
  // get the head value, delete the head, move the head to next node
  shift() {
    if( !this.head ) return undefined;

    let returnedItem = this.head;
    this.head = this.head.next; 
    this.length--;

    if( this.length === 0) {
      this.tail = null; 
    }
    return returnedItem;
  }

  // UNSHIFT: ADDS a new node to the BEGINNING of the list. 
  unshift(val) {
    let newNode = new Node(val);

    // like in POP, if the list is empty, ie no head, set the head and tail
    // to be the newly created node. Else.... 
    if( !this.head ) {
      this.head = newNode;
      this.tail = this.head; 
    } else {
      newNode.next = this.head; // wire up the new node to the head
      this.head = newNode; // make the new node the head now 
    }
    this.length++; 
    return this; 
  }

  // GET: retrieves a value from a node at a point indexed in from the head
  // 0 indexing in this case. 
  get(index) {
    // bounds checking
    if( index < 0 || index >= this.length) return null; 
    
    let current = this.head;
    let counter = 0; // use zero indexing from head 

    while( counter !== index ) {
      current = current.next; 
      counter++; 
    }
    return current; 
  }

  // SET: changes a value of a node at a point indexed in from the head, 0 indexing
  set(index, val) {
    let foundNode = this.get(index);
    if( foundNode === null ) return false; 
    foundNode.val = val; 
    return true; 

    /*
    Colt's solution:
    let foundNode = this.get(index);
    if( foundNode ) {
      foundNode.val = val;
      return true;
    }
    return false; 
    */

  }

  insert(index, val) {
    // make a node 
    let newNode = new Node(val);

    // basic bounds checking 
    if( index < 0 || index > this.length) return false; 

    // if we're inserting at the end or beginning, just call push or unshift.
    if ( index === this.length ) {
      this.push(val); 
      return true; 
    }
    if( index === 0) {
      this.unshift(val);
      return true; 
    }

    // insert logic: 
    let previous = this.get( index - 1 ); // get the node previous to insert point
    let temp = previous.next; // save the connection to the 'old next'
    previous.next = newNode; // wire up the new node to the previous
    newNode.next = temp; // wire up the new node to the 'old next'
    this.length++;

    return true; 
  }

  remove(index) {
    // >= this.length becuse length starts at 1 index starts at 0 
    // also explains for the pop 
    if( index < 0 || index >= this.length ) return undefined; 
    if( index === this.length - 1 ) return this.pop(); 
    if( index === 0 ) return this.shift(); 

    // remove logic: 
    let previousNode = this.get( index - 1 );
    let removedNode = previousNode.next; 
    previousNode.next = removedNode.next; // wire up the previous node to the node after removed
    this.length--;

    return removedNode; 
  }

  // Classic interview question. Reverse a linked list in place.
  // 
  reverse() {
    // first store original head in node 
    let node = this.head; 

    // then swap head and tail, in other words the tail is now the head. 
    this.head = this.tail

    // node is head and tail now? 
    this.tail = node; 

    // need tracker variables
    var next;
    var prev = null; // make sure end of list is null 

    // the buisness end. swapping. 
    for( let i = 0; i < this.length; i++ ) {
      next = node.next; // the next of whatever node we're on is saved in next
      node.next = prev; 
      prev = node; 
      node = next; 
    }
    return this; 
  }


}


var list1 = new SinglyLinkedList()

list1.push("Hello");
list1.push("and");
list1.push("goodbye");
list1.push(447);
list1.push("<3");

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

// console.log( list1.shift() );
// console.log( list1.shift() );
// console.log( list1.shift() );
// console.log( list1.shift() );

// list1.traversePrint();

// console.log( list1.unshift("BlYAT") )
// console.log( list1.unshift("suka") )
// console.log( list1.unshift("555") )
// list1.traversePrint();

// console.log( list1.get(4) ); // <3 

// console.log( list1.set( 0, "butt" ) )
// console.log( list1.set( 1, "butt23" ) )
// console.log( list1.set( 2, "butt13qq" ) )
// console.log( list1.set( 3, "23butt" ) )
// console.log( list1.set( 4, "buttw3" ) )
// console.log( list1.set( 5, "beett" ) )


// list1.traversePrint(); 

// console.log( list1.insert( 6, "push") )

// console.log( list1.insert( 2, "INSERT") );
// console.log( list1.insert( -2, "INSERT") ); // false
// console.log( list1.insert( 8, "INSERT") );  // false 
// console.log( list1.insert( 0, "unshift") )

// console.log( list1.remove(5) );

list1.traversePrint();

list1.reverse();

list1.traversePrint()
