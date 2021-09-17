/*

What is Dynamic Programming?

It is a method for solving a complex problem by breaking it down
into a _collection_ of simpler subproblems, solving each of those 
subproblems _just once_, and storing their solutions. 

It only works on problems with
-Optimal Substructure &
-Overlapping Subproblems

_Overlapping Subproblems are problems that can be broken down
into subproblems _which are reused several times_
For example, calculating a fibonacci number involves overlapping
subproblems, but merge sort almost always does not have any overlapping 
subproblems. 

_Optimal Substructure is when an optimal solution can be
constructed from optimal solutions of its subproblems. 
The optimal solutions of the subproblems can be chained together 
to get the optimal solution of the entire problem. 

*/