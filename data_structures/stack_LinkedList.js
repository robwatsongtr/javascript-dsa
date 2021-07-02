// STACK: 
// Last In First Out!
// 
// The first thing in is the last thing out, the 
// Last thing in is the first thing out. 

// A clean implemenetation can be made with a singly linked list
// but we will be pusing and popping from the BEGINNING of the list
// instead of the end to ensure constant time. 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
  }
}

class Stack {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0; 
  }

  // we need to push to the front of the list, not to the end 
  push(val) {
    let newNode = new Node(val);

    if( !this.first ) {
      this.first = newNode; 
      this.last = newNode; 
    } else {
      let temp = this.first; // store old first in temp var
      this.first = newNode; // new node becomes the new 'head'
      this.first.next = temp; // wire up the new head to the old one
    }
    this.size++; // increment size
    return this.size; // return size 
  }

  // we need to pop from the front of the list as well 
  pop() {
    if( !this.first ) return null;
    let temp = this.first; // grab the top/first value right now 

    // if there's only one node, last gets nulled 
    if( this.first === this.last) {
      this.last = null; 
    }

    // the first property is reset to beceome the next property,
    // effectively making the old first go bye bye, and the 
    // 'old first', or the popped value, gets returned as the temp variable 
    this.first = this.first.next
    
    this.size--;
    return temp.value; 
    
  }

}

let stack = new Stack();

console.log( stack.push('first') )
console.log( stack.push('second') )
console.log( stack.push('third') )

// console.log(stack);

console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.pop() );
console.log( stack.pop() );

