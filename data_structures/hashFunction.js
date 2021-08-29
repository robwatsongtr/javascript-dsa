// Hash funcionts, hash tables, etc.

/*

To implement a hash table, we will use an array.

In order to look up values by key, we need a way to convert keys into
valid array indicies.

A function that performes this task is called a hash function.

A hash function takes data of a variable size, and then spits out (maps)
data of a fixed size. 

What makes a good hash?
1. Fast (constant time)
2. Doesn't cluster outputs at specific indicies, but distributes uniformly.
3. Deterministic, ie same input yields same output.



*/