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

  // Shift REMOVES node from beginning of a list. No real time advantage to SLL.
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

  // Unshift ADDS a node to beginning of DLL. No real time advantage to SLL. 
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

  // GET retrieves a value at a node indexed in from the head. 0 indexing in this case.
  //
  // Doubly Linked list allows for an optimization based upon being able to work
  // bakwards from the tail. The index/node will be found from head if closer to head,
  // or tail, if closer to tail.
  get(index) {
    // bounds checking 
    if( index < 0 || index >= this.length ) return null;

    // if the index is less than or equal to list/2 start searching from head
    // otherwise start searching from tail 
    if( index <= (this.length/2) )  {

      let counter = 0; 
      let current = this.head;

      while( counter !== index ) { 
        current = current.next; 
        counter++;
      }
      return current; 

    } else {

      let current = this.tail;
      let counter = this.length - 1; 

      while( counter !== index ) {
        current = current.prev; 
        counter--; 
      }
      return current; 

    }
  }

  // Set: replacing a value of a node, 0 indexed. Same as SLL basically if get logic
  // is used so we can search for index from beginning or end. 
  set(index, val) {
    let foundNode = this.get(index);
    if( foundNode === null ) return false;
    foundNode.val = val; 
    return true; 
  }

  // Insert: insert a node at an index, zero indexed. Get logic is used
  // so that we can search for the index form beginning or end
  insert(index, val) {
    let newNode = new Node(val); 

    if( index < 0 || index >= this.length ) return false;

    if( index === 0 ) {
      console.log("unshift triggered")
      this.unshift(val);
      return true;
    }
    if( index === this.length ) {
      console.log('push triggered');
      this.push(val);
      return true;
    }

    let beforeNode = this.get( index - 1 );
    let afterNode = beforeNode.next; // save to be wired up after new node

    beforeNode.next = newNode; // wire up new node to previous node
    newNode.prev = beforeNode; // same here just other direction 

    newNode.next = afterNode; // wire up new node to the after node
    afterNode.previous = newNode; // same here just other direction 

    this.length++; 

    return true;  
  }

  // Remove item at indexed position 
  remove(index) {
    if( index < 0 || index >= this.length ) return undefined; 
    if( index === this.length - 1 ) return this.pop(); 
    if( index === 0 ) return this.shift(); 

    let removedNode = this.get(index);

    // Not going to use a separate variable for the 'after node": 
    // 
    // Wire up node before removed node to node after removed node 
    removedNode.prev.next = removedNode.next; 

    // wire up node after removed node back to node before removed node
    removedNode.next.prev = removedNode.prev;

    // clean up the removed node
    removedNode.next = null;
    removedNode.prev = null; 

    this.length--;

    return removedNode; 
 
  }

  
}

let list = new DoublyLinkedList();

// make the list 5 items long
list.push(99);
list.push("Fred Durst");
list.push(":(");
list.push(3232);
list.push("beastie334343")



// list.traversePrint();

// list.traversePrintReverse();

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

// console.log( list.get(1) );
// console.log( list.get(4) );
// console.log( list.get(6) );

// console.log( list.set(0, "zero") );
// console.log( list.set(2, ":)" ) );
// console.log( list.set(-9, "yay") );

// list.traversePrint();

// console.log( list.insert(0, "unshift triggered") ) // works 
// console.log( list.insert(5, "push triggered") )


list.traversePrint();

console.log( list.remove(5) );



list.traversePrint();