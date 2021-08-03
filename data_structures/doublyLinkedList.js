// Doubly Linked List

class Node  {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traversePrint() {
    let currentNode = this.head

    while( currentNode ) {
      console.log( currentNode.val );
      currentNode = currentNode.next; 
    }
  }

  traversePrintReverse() {
    let currentNode = this.tail;

    while( currentNode ) {
      console.log( currentNode.val );
      currentNode = currentNode.prev; 
    }
  }

  // Push ADDS a node to the END of the list. 
  push(val) {
    let newNode = new Node(val);

    if( !this.head ) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // wire up by setting next prop to new node
      newNode.prev = this.tail; // wire backwards from new node
      this.tail = newNode; // make newNode the tail now. 
    }

    this.length++;
    return this;
  }

  // Pop REMOVES a node at the end of the list, or 'remove last item.' 
  // Huge advantage to SLL: 
  // dont have to iterate from begining of list to find the second-to-last node.
  pop() {
    if( this.length === 0 ) return undefined;

    let poppedNode = this.tail;

    if( this.length === 1 ) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // new tail is simply the prev of poppedNode (old tail)
      this.tail.next = null; // sever connection from tail to poppedNode
      poppedNode.prev = null; // sever connection from poppedNode to tail 
    }

    this.length--
    return poppedNode; 
  }

  // Shift REMOVES node from beginning of a list. No real advantage to SLL.
  shift() {
    if( this.length === 0 ) return undefined;

    let oldHead = this.head;

    // needs to be an if else, not just an if or shifting last item (head) 
    // will throw error 
    if( this.length === 1 ) {
      this.head = null;
      this.tail = null; 
    } else {
      this.head = oldHead.next; // the new head is the next of the old head
      this.head.prev = null; // sever connection from new head to old head
      oldHead.next = null; // sever connection from old head to new head 
    }

    this.length--;
    return oldHead; 
  }

  // Unshift ADDS a node to beginning of DLL. No real advantage to SLL. 
  unshift(val) {
    let newNode = new Node(val);

    if( this.length === 0 ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; // wire up new Node to head looking 'back' 
      newNode.next = this.head; // wire up new Node to head looking 'forward'
      this.head = newNode; // make the newNode the head 
    }

    this.length++;
    return this; 
  }  

  get(index) {
    
  }

  set(index, val) {

  }

  insert(index, val) {

  }

  remove(index) {
       
  }

  
}

let list = new DoublyLinkedList();

list.push(99);
list.push("Fred Durst");
list.push(":(");
list.push('333rad');
list.push("beastie334343")

list.traversePrint();
list.traversePrintReverse();


// console.log( list.pop() );
// console.log( list.pop() );
// console.log( list.pop() );
// console.log( list.pop() );
// console.log( list.pop() );
// console.log( list.pop() );

//list.traversePrint(); 

// console.log( list.shift() )
// console.log( list.shift() )
// console.log( list.shift() )
// console.log( list.shift() )

// list.traversePrint();

// console.log( list.unshift("beastie boys") );
// console.log( list.unshift("beastie boys2") );
// console.log( list.unshift("beastie boys23") );
// console.log( list.unshift("beastie boys2323") );

// list.traversePrint();


