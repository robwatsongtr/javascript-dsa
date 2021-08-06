/*

HEAPS:

Heaps are trees. 

All heaps are as compact as possible: All the children of each node
are as full as they can be and left children are filled out first.

--MaxBinaryHeap:
Each parent node has at most two child nodes. 
The value of each parent node is a always greater than its child nodes. 
There are no guarantees between sibling nodes. 
No implied ordering between siblings. 


--MinBinaryHeap:
Each parent node has at most two child nodes. 
The value of each child node is always greater than its parent nodes. 
There are no guarantees between sibling nodes. 
No implied ordering between siblings. 

How are heaps represented? Often flattened in an array, with the 
root being the first sub, then BFS across the first level, 
BFS across 2nd level, etc:

        
      


*/